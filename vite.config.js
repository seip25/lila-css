import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  base:"/lila-css/",
  plugins: [react()],
})
