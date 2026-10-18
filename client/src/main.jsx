import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import { system } from "./theme/theme.js"
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async"
import ScrollTop from './components/ScrollTop.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <ScrollTop />
        <ChakraProvider value={system}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
