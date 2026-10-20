import { useEffect } from "react"
import { pingServer } from "./services/authServices"
import AppRoutes from "./routes/AppRoutes"
import { Toaster } from "./components/ui/toaster"

function App() {
  useEffect(() => {
    pingServer();
  }, [])

  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  )
}

export default App
