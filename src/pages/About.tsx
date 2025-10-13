import { ThemeProvider } from '@emotion/react'
import theme from "../../themes/theme"
import useContentful from "../hooks/useContentful"
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom'


const { Title, Text } = Typography;

export const About = () => {
    const { websiteStaticText } = useContentful();
    if (!websiteStaticText || !Object.keys(websiteStaticText).length) {
        return null;
    }
    console.log(websiteStaticText, "websiteStaticText")
    return (
        <ThemeProvider theme={theme}>
            <Text>heheh</Text>
            {(websiteStaticText?.items).map((e: any) => {
                return (<>
                    <Title>{e.fields.title}</Title>
                    <Text>{e.fields.body.content[0].content[0].value}</Text>
                </>)
            })}
        </ThemeProvider>
    )
}

