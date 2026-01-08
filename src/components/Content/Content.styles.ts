import styled from "@emotion/styled";
import { Image } from 'antd';


export const StyledTitle = styled.div`
font-weight:700;
font-size:40px;
color:#222222;
text-align:center;
`

export const ContentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const StyledImage = styled(Image)`
max-height:400px;
margin-top:50px;
margin-bottom:50px;
border-radius:10px;
`
export const ImageContainer = styled.div`
max-width:${window.innerWidth/2}px;
`

export const TextContainer = styled.div`
max-width:${window.innerWidth/4}px;
display:flex;
flex-direction:column;
margin-top:20px;
text-align:left;
`