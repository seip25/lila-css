import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const folderBuild = "docs"

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: folderBuild,
  }
})
