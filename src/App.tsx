import { Route, Routes } from 'react-router-dom'
import theme from "../themes/theme"
import Home from './pages/home/Home'
import { ThemeProvider } from '@emotion/react'
import GodAndSex from './pages/God&Sex/God&Sex'
import styled from "@emotion/styled";
// import Manhood from "../src/pages/Manhood/Manhood"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/God&Sex" element={<GodAndSex />} />
          {/* <Route path="/Manhood" element={<Manhood />} /> */}
        </Routes>
        </Container>
    </ThemeProvider >
  )
}


const Container = styled.div`
background-color:#efefef;
`

export default App
