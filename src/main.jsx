import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import './styles/main.css'
import './styles/components.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<app />)
