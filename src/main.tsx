import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// ⬇️ THIS REGISTERS THE PWA SERVICE WORKER (dev + prod)
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/safetylightai-pwa">
    <App />
  </BrowserRouter>
    </React.StrictMode>
)
