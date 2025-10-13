import { ThemeProvider } from '@emotion/react'
import theme from "../../themes/theme"
import useContentful from "../hooks/useContentful"
import { Typography } from 'antd';

const { Title, Text } = Typography;

export const Home = () => {
    const { blog } = useContentful();
    if (!blog || !Object.keys(blog).length) {
        return null;
    }

    console.log(blog?.items[0].fields.title, "app Page data")
    return (
        <ThemeProvider theme={theme}>
            {(blog?.items).map((e: any) => {
                console.log(e.fields.body, "mapcontent")
                return (<>
                    <Title>{e.fields.title}</Title>
                    <Text>{e.fields.body.content[0].content[0].value}</Text>
                </>)
            })}
        </ThemeProvider>
    )
}

