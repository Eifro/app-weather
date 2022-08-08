import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
