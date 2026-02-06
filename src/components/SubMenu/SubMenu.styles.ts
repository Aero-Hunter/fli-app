import styled from '@emotion/styled'
import { Button } from 'antd'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-around;
    min-width: ${window.innerWidth / 5}px;
    align-self: center;
`
export const StyledButton = styled(Button)`
    font-size: 12px;
    color: #000000;
    margin: 0px;
    font-weight: 500;
    margin-right:1rem;
`
