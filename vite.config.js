import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Allow JSX in both .js and .jsx files so old CRA files don't break at import time
      include: '**/*.{js,jsx}',
    }),
  ],
})
