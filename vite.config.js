import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

// build: {
//   chunkSizeWarningLimit: 5000, // Set the chunk size limit to 1000 kBs
// },
})



