const MAX_FILE_SIZE = 5 * 1024 * 1024
const MAX_TOTAL_FILE_SIZE = 20 * 1024 * 1024
const MAX_FILES = 5
const ALLOWED_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/webp',
  'application/pdf',
  'application/dicom',
])

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])
}

function safeFilename(value) {
  return String(value || 'attachment')
    .replace(/[/\\]/g, '_')
    .replace(/[^a-zA-Z0-9._ -]/g, '_')
    .slice(0, 120) || 'attachment'
}

function getFileType(file) {
  if (file.type) return file.type
  const extension = file.name.split('.').pop()?.toLowerCase()
  if (extension === 'png') return 'image/png'
  if (extension === 'jpg' || extension === 'jpeg') return 'image/jpeg'
  if (extension === 'webp') return 'image/webp'
  if (extension === 'pdf') return 'application/pdf'
  if (extension === 'dcm' || extension === 'dicom') return 'application/dicom'
  return ''
}

function toBase64(buffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  const chunkSize = 0x8000
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize))
  }
  return btoa(binary)
}

async function sendInquiry(request, env) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed.' }, 405)
  }

  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: 'Invalid request origin.' }, 403)
  }

  const length = Number(request.headers.get('content-length') || 0)
  if (length > 27 * 1024 * 1024) {
    return json({ error: 'The upload is too large. Please use smaller files.' }, 413)
  }

  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.RESEND_TO_EMAIL) {
    return json({
      error: 'The inquiry service is not configured yet. Please try again later or contact us by email.',
    }, 503)
  }

  let form
  try {
    form = await request.formData()
  } catch {
    return json({ error: 'The submitted form could not be read. Please try again.' }, 400)
  }

  const name = String(form.get('name') || '').trim().slice(0, 160)
  const email = String(form.get('email') || '').trim().slice(0, 254)
  const phone = String(form.get('phone') || '').trim().slice(0, 80)
  const country = String(form.get('country') || '').trim().slice(0, 120)
  const preferredContact = String(form.get('preferred_contact') || '').trim().slice(0, 40)
  const message = String(form.get('message') || '').trim().slice(0, 5000)
  const dentalNeeds = String(form.get('dental_needs') || '').trim().slice(0, 5000)
  const preferredArrival = String(form.get('preferred_arrival') || '').trim().slice(0, 20)
  const preferredDeparture = String(form.get('preferred_departure') || '').trim().slice(0, 20)
  const travelers = String(form.get('travelers') || '').trim().slice(0, 20)
  const travelPreferences = String(form.get('travel_preferences') || '').trim().slice(0, 2000)

  if (!name || !email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    return json({ error: 'Please provide your name and a valid email address.' }, 400)
  }

  const files = form.getAll('attachment').filter((entry) => entry instanceof File && entry.size > 0)
  if (files.length > MAX_FILES) {
    return json({ error: 'Please upload no more than 5 files.' }, 400)
  }

  let totalFileSize = 0
  const attachments = []
  for (const file of files) {
    const contentType = getFileType(file)
    if (!ALLOWED_TYPES.has(contentType)) {
      return json({ error: 'Please upload PNG, JPG, WEBP, PDF or DICOM files only.' }, 400)
    }
    if (file.size > MAX_FILE_SIZE) {
      return json({ error: 'Each file must be 5 MB or smaller.' }, 400)
    }
    totalFileSize += file.size
    if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
      return json({ error: 'The combined size of your files must be 20 MB or smaller.' }, 400)
    }
    attachments.push({
      filename: safeFilename(file.name),
      content: toBase64(await file.arrayBuffer()),
      content_type: contentType,
    })
  }

  const text = [
    'New inquiry from SmileCroatia',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Country: ${country || 'Not provided'}`,
    `Preferred contact: ${preferredContact || 'Not provided'}`,
    `Preferred arrival: ${preferredArrival || 'Not provided'}`,
    `Preferred departure: ${preferredDeparture || 'Not provided'}`,
    `Travelers: ${travelers || 'Not provided'}`,
    `Travel preferences: ${travelPreferences || 'Not provided'}`,
    '',
    'Message:',
    message || 'Not provided',
    '',
    'Dental needs:',
    dentalNeeds || 'Not provided',
    '',
    `Attachments: ${attachments.length}`,
  ].join('\\n')

  const html = `
    <h2>New inquiry from SmileCroatia</h2>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#ddd">
      <tr><th align="left">Name</th><td>${escapeHtml(name)}</td></tr>
      <tr><th align="left">Email</th><td>${escapeHtml(email)}</td></tr>
      <tr><th align="left">Phone</th><td>${escapeHtml(phone || 'Not provided')}</td></tr>
      <tr><th align="left">Country</th><td>${escapeHtml(country || 'Not provided')}</td></tr>
      <tr><th align="left">Preferred contact</th><td>${escapeHtml(preferredContact || 'Not provided')}</td></tr>
      <tr><th align="left">Preferred arrival</th><td>${escapeHtml(preferredArrival || 'Not provided')}</td></tr>
      <tr><th align="left">Preferred departure</th><td>${escapeHtml(preferredDeparture || 'Not provided')}</td></tr>
      <tr><th align="left">Travelers</th><td>${escapeHtml(travelers || 'Not provided')}</td></tr>
      <tr><th align="left">Travel preferences</th><td>${escapeHtml(travelPreferences || 'Not provided').replace(/\\n/g, '<br>')}</td></tr>
      <tr><th align="left">Message</th><td>${escapeHtml(message || 'Not provided').replace(/\\n/g, '<br>')}</td></tr>
      <tr><th align="left">Dental needs</th><td>${escapeHtml(dentalNeeds || 'Not provided').replace(/\\n/g, '<br>')}</td></tr>
      <tr><th align="left">Attachments</th><td>${attachments.length}</td></tr>
    </table>
  `

  let response
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: [env.RESEND_TO_EMAIL],
        reply_to: email,
        subject: `New SmileCroatia inquiry from ${name}`,
        text,
        html,
        ...(attachments.length ? { attachments } : {}),
      }),
    })
  } catch {
    return json({ error: 'The email service could not be reached. Your inquiry was not sent; please try again later.' }, 502)
  }

  const result = await response.json().catch(() => ({}))
  if (!response.ok) {
    console.error('Resend rejected an inquiry', response.status, result?.name || result?.statusCode || 'unknown error')
    return json({
      error: response.status === 401 || response.status === 403
        ? 'The email service is not configured correctly yet. Please try again later.'
        : 'We could not send your inquiry right now. Please try again later.',
    }, 502)
  }

  return json({ success: true })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/api/inquiry') {
      return sendInquiry(request, env)
    }
    return env.ASSETS.fetch(request)
  },
}
