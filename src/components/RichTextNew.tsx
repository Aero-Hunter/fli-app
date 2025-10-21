import { Typography } from 'antd';

const { Text } = Typography;

export const RichTextNew = (text: any) => {
    console.log(text.text, "text")
    if (text.text.isArray()) {
        return (
            <>
                {(text.text).map((e: any, index: number) => {
                    return (
                        <div key={index}><Text>{e}</Text></div>
                    )
                })}
            </>
        )
    } else {
        return <Text>{text.text}</Text>
    }
}

