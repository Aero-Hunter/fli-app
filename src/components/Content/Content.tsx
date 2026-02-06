import { RichTextNew } from '../RichText/RichText'
import {
    ContentContainer,
    ImageContainer,
    TextContainer,
} from './Content.styles'
import SubMenu from '../SubMenu/SubMenu'
import PageTitle from '../PageTitle/PageTitle'
import { useProjectCtx } from '../../api/Ctx/useProjectCtx'
import HeaderImage from '../HeaderImage/HeaderImage'
import type { PageTypeOne } from '../../api/Ctx/Ctx.types'
import StaticTitle from '../StaticTitle/StaticTitle'

export default function Content() {
    const { content, isLoading } = useProjectCtx<PageTypeOne>()
    if (isLoading) {
        return null
    }
    return (
        <ContentContainer>
            <StaticTitle />
            <PageTitle />
            <SubMenu />
            <ImageContainer>
                {content.fields.image ? <HeaderImage /> : null}
            </ImageContainer>
            <TextContainer>
                <RichTextNew />
            </TextContainer>
        </ContentContainer>
    )
}
