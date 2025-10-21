import styled from "styled-components";

export const Conatiner = styled.div`
display:flex;
flex-direction:column;
height:${window.innerHeight}px
`
export const TitleContainer = styled.div`
background-color:#f7f8f9;
display:flex;
flex-direction:column;
align-items:center;
height:100%;
`
export const ContentContainer = styled.div`
background-color:#ffffff;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
width:${window.innerWidth / 1.5}px;
height:100%;
margin-bottom:90px;
padding-left:50px;
padding-right:50px;
`