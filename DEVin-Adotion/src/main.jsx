import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { DevAdotionProvider } from './context/devAdotionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <DevAdotionProvider>
      <App />
    </DevAdotionProvider>

  </React.StrictMode>,
)
