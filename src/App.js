import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import LandingPage from './components/LandingPage'

export default function App() {
  return (
    <div className='app bg-cyan-700 font-mono h-screen'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
