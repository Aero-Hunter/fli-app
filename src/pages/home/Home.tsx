import { Layout } from "../../components/Layout/Layout";
import useContentful from "../../hooks/useContentful"


export default function Home() {
    const { homeContent } = useContentful();
    if (!homeContent || !Object.keys(homeContent).length) {
        return null;
    }
    return (
      <><Layout title={false} content={homeContent}/></>
    )
}