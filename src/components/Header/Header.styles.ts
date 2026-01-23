import styled from '@emotion/styled'
import { Space } from 'antd'

export const HeaderContainer = styled(Space.Compact)`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const DropDownButton = styled(Space)`
    margin-top: 30px;
    font-weight: 600;
    font-size: 15px;
    color: #000000;
    margin-right: 30px;
    &:hover {
        color: #7e7e7eff;
    }
`
