/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GRAPHCMS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
