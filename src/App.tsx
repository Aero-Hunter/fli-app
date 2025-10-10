import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import theme from "../themes/theme"
import useContentful from "./hooks/useContentful"
import { RichText } from "./components/RichText"
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [count, setCount] = useState(0)
  const { blog } = useContentful();


  console.log(blog, "blog")
  return (
    <ThemeProvider theme={theme}>
      <Title>{blog?.title}</Title>
       <RichText richTextDocument={blog?.body}></RichText>
    </ThemeProvider>
  )
}

export default App
