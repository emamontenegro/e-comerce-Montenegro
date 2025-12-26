import { BrowserRouter } from "react-router";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/auth/index.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter  
  basename={import.meta.env.PROD && !import.meta.env.VERCEL
    ? "/e-comerce-Montenegro"
    : "/"}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
