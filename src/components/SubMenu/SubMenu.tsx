import { useNavigate } from 'react-router-dom'
import { Container, StyledButton } from './SubMenu.styles'
import { menuItems } from './SubMenu.constants'
import { useProjectCtx } from '../../api/Ctx/useProjectCtx'

interface SubMenuItemProps {
    label: string
    key: string
    route: string
}

export default function SubMenu() {
    const { content } = useProjectCtx()
    const navigate = useNavigate()
    const currentPath = window.location.href.split('/').at(-1)
    const menu = menuItems.find((item) => item.id === content.fields.id)
    return (
        <Container>
            {menu?.subMenuItems?.map(
                ({ label, key, route }: SubMenuItemProps) => {
                    return (
                        <StyledButton
                            type="text"
                            key={key}
                            onClick={() => navigate(route)}
                            disabled={route == currentPath}
                        >
                            {label}
                        </StyledButton>
                    )
                }
            )}
        </Container>
    )
}
