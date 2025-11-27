import { Typography } from 'antd';
import { StyledTitle } from './RichText.styles';

const { Text } = Typography;
export const RichTextNew = (text: object) => {
    console.log(text, "Looking for id")
    const value = text.text.content[0].value;
    if (text.text.nodeType === "paragraph" && text.text.content[0].marks[0]?.type === "italic") {
        return (
            <Text italic={true}>{value}</Text>
        )
    }
    if (text.text.nodeType === "paragraph") {
        return (
            <Text >{value}</Text>
        )
    }
    if (text.text.nodeType === "heading-1") {
        return (
            <StyledTitle id={value} style={{ color: "#222222" }}>{value}</StyledTitle>
        )
    }

}
