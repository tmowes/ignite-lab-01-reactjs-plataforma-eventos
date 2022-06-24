/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHCMS_URL: string
  readonly VITE_GRAPHCMS_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
