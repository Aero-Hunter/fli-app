import useContentful from "../../hooks/useContentful"
import { Container } from "./home.styles";


export default function Home() {
    const { homeContent } = useContentful();
    if (!homeContent || !Object.keys(homeContent).length) {
        return null;
    }

    return (
        <div>
        <Container>
            <div>heheheh</div>
        </Container>
        </div>
    )
}