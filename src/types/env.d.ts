/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: 'development' | 'staging' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
