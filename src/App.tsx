import { Route, Routes } from 'react-router-dom'
import theme from "../themes/theme"
import Home from './pages/home/Home'
import { About } from './pages/About'
import { Media } from './pages/Media'
import { ThemeProvider } from '@emotion/react'
import GodAndSex from './pages/God&Sex/God&Sex'

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/God&Sex" element={<GodAndSex />} />
        </Routes>
    </ThemeProvider >
  )
}

export default App
