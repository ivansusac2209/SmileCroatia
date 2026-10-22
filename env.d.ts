/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Form service endpoint that receives inquiries (e.g. a Formspree or Basin form URL). Empty = demo mode. */
  readonly VITE_FORM_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
