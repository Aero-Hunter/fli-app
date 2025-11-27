import useContentful from "../hooks/useContentful"
import { Typography } from 'antd';


const { Title, Text } = Typography;

export const About = () => {
    const { websiteStaticText } = useContentful();
    if (!websiteStaticText || !Object.keys(websiteStaticText).length) {
        return null;
    }
    return (
        <>
            <Text>heheh</Text>
            {(websiteStaticText?.items).map((item: object) => {
                return (<>
                    <Title>{item.fields.title}</Title>
                    <Text>{item.fields.body.content[0].content[0].value}</Text>
                </>)
            })}
        </>
    )
}

