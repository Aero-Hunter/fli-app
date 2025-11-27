import styled from '@emotion/styled';
import { Input, Button, Space, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import headerImage from '../../assets/HeaderImage.jpg';

export const HeaderInputContainer = styled(Space.Compact)`
    width: 500px;
    display:flex;
    justify-content:center;
`
export const HeaderInput = styled(Input)`
    border-radius: 0px;
    height:49px;
    width:258px;
    font-size:17px;
    font-weight:500;
`;
export const HeaderButton = styled(Button)`
    border-radius: 0px;
    background-color:${({ theme }) => theme.colors.red100};
     height:49px;
     width:126px;
     border:none;
      font-size:17px;
    font-weight:500;
`;
export const HeaderContainer = styled.div`
    background-color:#ffffff;
    width:${screen.width}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;
export const DropdownButton = styled(Button)`
    border-radius: 0px;
    font-size:20px;
    color:${({ theme }) => theme.colors.black};
    height:100%;
    margin:0px;
`;
export const HeaderBarContainer = styled.div`
    display:flex;
    flex-direction:row;
    height:${window.innerHeight / 10}px;
    align-items:center;
`;
export const NewsletterHeaderSection = styled.div`
    background-image: url(${headerImage});
    background-image-size: 1920*284;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width:${window.innerWidth}px;
    padding-top:60px;
    padding-bottom:60px;
`
export const StyledTitle = styled.div`
   color:white;
   font-weight:400;
   font-size:25px;
   margin-bottom:20px;
`
export const DropdownMenu = styled(Dropdown)`
border-radius:0px;
`
export const DownOutlinedStyled = styled(DownOutlined)`
margin-top:5px;
`