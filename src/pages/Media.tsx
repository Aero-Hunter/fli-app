import { ThemeProvider } from '@emotion/react'
import theme from "../../themes/theme"
import useContentful from "../hooks/useContentful"
import { Image, Typography } from 'antd';


const { Title, Text } = Typography;

export const Media = () => {
    const { websiteMedia } = useContentful();
    if (!websiteMedia || !Object.keys(websiteMedia).length) {
        return null;
    }
    console.log(websiteMedia, "websiteStaticText")
    return (
        <ThemeProvider theme={theme}>
            <Text>heheh</Text>
            {(websiteMedia?.items).map((e: any) => {
                console.log(e, "media items")
                return (
                    <>
                        <Title>{e.fields.title}</Title>
                        <Image
                            width={200}
                            src={e.fields.video.fields.file.url}
                        />
                    </>
                )
            })}
        </ThemeProvider>
    )
}

