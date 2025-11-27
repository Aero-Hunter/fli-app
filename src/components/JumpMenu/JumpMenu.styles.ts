import styled from "@emotion/styled";
import { Typography } from 'antd';

const { Text } = Typography;

export const MainContainer = styled.div`
background-color:${({ theme }) => theme.colors.white};
display:flex;
flex-direction:column;
border-radius: .25rem;
max-width:40%;
align-self:flex-start;
padding-top:20px;
padding-bottom:20px;
padding-right:10px;
padding-left:10px;
`
export const StyledText = styled(Text)`
font-size:14px;
color:#222222;
cursor: pointer;
 &:hover {
    text-decoration:underlined;
  }
`
export const StyledTitle = styled.div`
font-size:11px;
line-height:14px;
margin-bottom:15px;
font-weight:700;
color:#222222;
`
export const CounterText = styled(Text)`
font-size:14px;
color:#222222;
font-weight:400;
margin-right:1rem;
min-width:9%;
`
export const ItemContainer = styled.div`
display:flex;
flex-direction:row;
margin-right:10px;
margin-bottom:1rem;
`