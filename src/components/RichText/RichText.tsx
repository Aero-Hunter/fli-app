import { useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { StyledTitle, StyledText, StyledBoldText } from './RichText.styles'
import {
    documentToReactComponents,
    type Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import type { Document } from '@contentful/rich-text-types'

export const RichTextNew = () => {
    const { content } = useProjectCtx()
    const value = content.fields.content

    const options: Options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (_node, children) => {
                return <StyledTitle>{children}</StyledTitle>
            },
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <StyledText>{children}</StyledText>
            ),
        },
        renderMark: {
            [MARKS.ITALIC]: (text) => {
                return <StyledText italic>{text}</StyledText>
            },
            [MARKS.BOLD]: (text) => {
                return <StyledBoldText strong>{text}</StyledBoldText>
            },
        },
    }
    return documentToReactComponents(value as Document, options)
}
