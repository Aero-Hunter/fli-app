import styled from "@emotion/styled";


export const MainContainer = styled.div`
background-color:${({ theme }) => theme.colors.backgroundColor};
display:flex;
flex-direction:row;
margin-bottom: 40px;
min-height:100%;
align-items:center;
padding-right:${window.innerWidth / 4}px;
padding-left:${window.innerWidth / 8}px;
padding-top:4rem;

`
export const JumpMenuContainer = styled.div`
flex-grow:1;
align-self:flex-start;
`
export const TitleContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100%;
justify-content: flex-start;
margin-bottom:1rem;
`
export const StyledTitle = styled.div`
font-size:42px;
font-weight:600;
color:#000000;
`

export const ContentContainer = styled.div`
background-color:${({ theme }) => theme.colors.white};
height:100%;
display:flex;
flex-direction:column;
align-items:left;
width:${window.innerWidth / 3}px;
margin-bottom:90px;
padding-left:50px;
padding-right:50px;
border-radius: .25rem;
`