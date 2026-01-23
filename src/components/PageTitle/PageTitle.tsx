import type { PageTypeOne } from '../../api/Ctx/Ctx.types'
import { useProjectCtx } from '../../api/Ctx/useProjectCtx'
import {
    MainContainer,
    TextContainer,
    Title,
    Text,
    EqualContainer,
} from './PageTitle.styles'

export default function PageTitle() {
    const { content } = useProjectCtx<PageTypeOne>()
    console.log(content)
    const title = content.fields.title
    const subtitle = content.fields.subtitle
    const titleStatic = ['Love', 'God', 'Be', 'Transformed']
    return (
        <MainContainer>
            <TextContainer>
                <MainContainer>
                    {titleStatic.map((e) => {
                        return (
                            <Title
                                style={{
                                    color: content.fields.subtitleColor,
                                }}
                            >
                                {e}
                            </Title>
                        )
                    })}
                </MainContainer>
                <EqualContainer>=</EqualContainer>
                <Title
                    style={{
                        color: content.fields.titleColorHex,
                        alignSelf: 'flex-end',
                    }}
                >
                    {title}
                </Title>
            </TextContainer>
            <Text
                style={{
                    color: content.fields.titleColorHex,
                }}
            >
                {subtitle}
            </Text>
        </MainContainer>
    )
}
