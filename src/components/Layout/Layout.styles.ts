import styled from "@emotion/styled";


export const Container = styled.div`
display:flex;
flex-direction:column;
background-color:#efefef;
width:${window.innerWidth}px;
min-height:${window.innerHeight}px;
justify-content:end;
padding-top:100px;
padding-bottom:100px;
`
export const ContentContainer = styled.div`
display:flex;
background-color:#ffffff;
min-width:${window.innerWidth/1.4}px;
min-height:${window.innerHeight/1.105}px;
align-self: center;
border-radius:20px;
flex-direction:column;
align-items:center;
padding-bottom:100px;
`