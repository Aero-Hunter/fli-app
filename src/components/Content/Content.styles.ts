import styled from '@emotion/styled'

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ImageContainer = styled.div`
    max-width: ${window.innerWidth / 2}px;
`

export const TextContainer = styled.div`
    max-width: ${window.innerWidth / 4}px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: left;
`
