import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Landing, NotFound } from "./pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing/> }/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}
