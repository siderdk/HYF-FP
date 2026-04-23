import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// TODO: replace with your GitHub repo name
const repoName = 'HYF-FP'

export default defineConfig({
  plugins: [react()],
  base: `/`,
})
