import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // Use StrictMode for dev only
  <StrictMode>
    <App />
  </StrictMode>,
)
