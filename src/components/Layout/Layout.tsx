import type { ContentResponsePageType1 } from "../../types/contentTypes";
import Content from "../Content/Content";
import Header from "../Header/Header";
import { ContentContainer, Container } from "./Layout.styles";


interface LayoutProps{
    content:ContentResponsePageType1;
    title?:boolean;
}

export const Layout = ({content,title=true}: LayoutProps) => {
    return (
      <Container>
            <ContentContainer><Header/><Content content={content} title={title}/></ContentContainer>
        </Container>
    )
}

