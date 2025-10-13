import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Media } from './pages/Media'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </>
  )
}

export default App
