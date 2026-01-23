import { useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { StyledTitle, StyledText } from './RichText.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

interface Content {
    nodeType: string
    value: string
    marks: string[]
}
interface Heading1RootProps {
    nodeType: string
    data: object
    content: Content[]
}
export const RichTextNew = () => {
    const { content } = useProjectCtx()
    const value = content.fields.content.content
    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (item: Heading1RootProps) => {
                const title = item.content[0].value
                console.log(title, '<<title')
                return <StyledTitle>{title}</StyledTitle>
            },
        },
        renderMark: {
            [MARKS.ITALIC]: (text: string) => {
                return <StyledText italic>{text}</StyledText>
            },
            [MARKS.BOLD]: (text: string) => {
                return <StyledText strong>{text}</StyledText>
            },
        },
    }
    return value.map((item) => documentToReactComponents(item, options))
}
