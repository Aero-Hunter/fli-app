import useContentful from "../../hooks/useContentful"
import { Layout } from "../../components/Layout/Layout";


export default function GodAndSex() {
    const { sexGodContent } = useContentful();
    if (!sexGodContent || !Object.keys(sexGodContent).length) {
        return null;
    }

    return (
        <>
            <Layout content={sexGodContent} />
        </>
    )
}