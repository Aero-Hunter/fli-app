import styled from '@emotion/styled'
import { Space } from 'antd'

export const HeaderContainer = styled(Space.Compact)`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ff9900;
    border-radius: 20px 20px 0px 0px;
    height: 4.5rem;
`

export const DropDownButton = styled(Space)`
    font-family: Marcellus;
    margin-top: 30px;
    font-weight: 600;
    font-size: 15px;
    color: #000000;
    margin-right: 30px;
    &:hover {
        color: #7e7e7eff;
    }
`
