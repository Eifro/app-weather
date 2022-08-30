import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

export default function App() {
  return (
    <div className='app bg-cyan-700 h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
