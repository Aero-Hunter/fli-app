import styled from '@emotion/styled';
import {  Button, Space } from 'antd';

export const HeaderContainer = styled(Space.Compact)`
    width: 100%;
    display:flex;
    justify-content:center;
`
export const StyledButton = styled(Button)`
    border-radius: 0px;
    font-size:15px;
    color:#000000;
    margin:0px;
    font-weight:500;
    margin-top:30px;
`;

export const DropDownButton = styled(Space)`
    margin-top:30px;
    font-weight:600;
    font-size:15px;
    color:#000000;
    margin-right:30px;
    &:hover {
        color:#7e7e7eff;
  }
`;