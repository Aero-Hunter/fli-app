import { RichTextNew } from "../RichText/RichText";
import { ContentContainer, ImageContainer, StyledImage, TextContainer } from "./Content.styles";
import image from "../../assets/HeaderImage.jpg"
import type { ContentResponse } from "../../types/contentTypes";
import SubMenu from "../SubMenu/SubMenu";
import PageTitle from "../PageTitle/PageTitle";
import { dummyContent } from "../PageTitle/dummyContent";

interface ContentProps{
    content:ContentResponse;
    title:boolean;
}

export default function Content({content,title}:ContentProps) {
    return (
      <ContentContainer>
        <SubMenu title={title?content.items[0].fields.title:"Home"}/>
        <PageTitle titleData={dummyContent}/>
        {/* { title?<StyledTitle>{content.items[0].fields.title}</StyledTitle>:null} */}
        <ImageContainer>
        <StyledImage src={image} preview={false}/>
        </ImageContainer>
        <TextContainer>
        <RichTextNew content={content}/>
        </TextContainer>
      </ContentContainer>
    )
}

