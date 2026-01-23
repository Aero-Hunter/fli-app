import { Image } from 'antd'
import styled from '@emotion/styled'
import { useProjectCtx } from '../../api/Ctx/useProjectCtx'
import type { PageTypeOne } from '../../api/Ctx/Ctx.types'

export default function HeaderImage() {
    const { content, isLoading } = useProjectCtx<PageTypeOne>()
    if (isLoading) {
        return null
    }
    console.log(content, 'content')
    return (
        <StyledImage
            src={`${content.fields.image.fields.file.url}`}
            preview={false}
        />
    )
}

const StyledImage = styled(Image)`
    max-height: 400px;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
`
