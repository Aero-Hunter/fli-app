import Content from '../Content/Content'
import Header from '../Header/Header'
import { ContentContainer, Container } from './Layout.styles'

export const Layout = () => {
    return (
        <Container>
            <ContentContainer>
                <Header />
                <Content />
            </ContentContainer>
        </Container>
    )
}
