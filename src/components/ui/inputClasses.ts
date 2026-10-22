export function inputClasses(hasError?: boolean | string | null) {
  return [
    'w-full rounded-md border bg-white px-3 py-2.5 text-base text-ink placeholder:text-subtle sm:text-sm',
    'focus:border-navy-700 focus:ring-2 focus:ring-navy-700/15 focus:outline-none',
    hasError ? 'border-danger' : 'border-line',
  ]
}
