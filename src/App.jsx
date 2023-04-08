import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import NotFound from "./pages/NotFound"
import { useFetch } from './hooks/useFetch'
import Home from './pages/Home'

function App() {
  const [l, setL] = useState(false)
  const [refresh, setRefresh] = useState(true)
  const { data, error } = useFetch('https://randomuser.me/api/?results=9', refresh)
  if (data) {
    setTimeout(() => {
      setL(true)
    }, 1000);
  }
  return (
    <div className="App font-FontMontserrat">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} l={l} setRefresh={setRefresh} refresh={refresh} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App