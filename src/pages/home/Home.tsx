import { ThemeProvider } from '@emotion/react'
import theme from "../../../themes/theme"
import useContentful from "../../hooks/useContentful"
import { Typography } from 'antd';
import Header from '../../components/Header/Header';
import { Conatiner, ContentContainer, TitleContainer } from './home.styles';
import { RichText } from '../../components/RichText';
import { RichTextNew } from '../../components/RichTextNew';

const { Title, Text } = Typography;

export default function Home() {
    const { blog } = useContentful();
    if (!blog || !Object.keys(blog).length) {
        return null;
    }

    console.log(blog?.items[0].fields.title, "app Page data")
    return (
        <ThemeProvider theme={theme}>
            <Conatiner>
                <Header />
                <TitleContainer>
                    <Title>About</Title>
                    <ContentContainer>
                        {(blog?.items).map((e: any) => {
                            console.log(e.fields.body, "mapcontent")
                            return (<>
                                <Title>{e.fields.title}</Title>
                                <Text>{e.fields.body.content[0].content[0].value}</Text>
                                {/* <RichText richTextDocument={e.fields.body.content[0].content[0].value}></RichText> */}
                                {/* <RichTextNew text={e.fields.body.content.length > 1 ? e.fields.body.content : e.fields.body.content[0].content[0].value} /> */}
                            </>)
                        })}
                    </ContentContainer>
                </TitleContainer>
            </Conatiner>

        </ThemeProvider>
    )
}

