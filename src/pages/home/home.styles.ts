import styled from "@emotion/styled";


export const Container = styled.div`
display:flex;
flex-direction:column;
margin-bottom: 40px;
min-height:100%;
background-color:#efefef;
`
export const TitleContainer = styled.div`
background-color:${({ theme }) => theme.colors.white};
display:flex;
flex-direction:column;
align-items:center;
min-height:100%;
`
export const ContentContainer = styled.div`
height:100%;
display:flex;\
flex-direction:column;
align-items:center;
width:${window.innerWidth / 1.5}px;
height:100%;
margin-bottom:90px;
padding-left:50px;
padding-right:50px;
`