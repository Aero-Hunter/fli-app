import useContentful from "../../hooks/useContentful"
import { Layout } from "../../components/Layout/Layout";


export default function GodAndSex() {
    const { sexGodContent,homeContent } = useContentful();
    if (!sexGodContent || !Object.keys(sexGodContent).length) {
        return null;
    }
console.log(sexGodContent,"god")
console.log(homeContent,"home")
    return (
        <>
            <Layout content={sexGodContent} />
        </>
    )
}