// src/main.jsx — replace the whole file
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)

// Fade out the initial HTML loader once React has actually painted the app,
// rather than the moment the script starts running.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const loader = document.getElementById('initial-loader')
    if (loader) {
      loader.classList.add('loader-hide')
      setTimeout(() => loader.remove(), 450)
    }
  })
})