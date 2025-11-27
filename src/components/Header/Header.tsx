import { StyledTitle, NewsletterHeaderSection, HeaderInput, HeaderButton, HeaderContainer, HeaderInputContainer, HeaderBarContainer, DropdownButton, DropdownMenu, DownOutlinedStyled } from './Header.styles';
import { useHeader } from './useHeader';
import { useNavigate } from 'react-router-dom';



export default function Header() {
    const navigate = useNavigate()
    const { menuItems } = useHeader();
    return (
        <HeaderContainer>
            <NewsletterHeaderSection>
                <StyledTitle>Understanding Catholic views on Human Sexuality</StyledTitle>
                <StyledTitle>Sign up to receive new FLI articles daily</StyledTitle>
                <HeaderInputContainer >
                    <HeaderInput placeholder="Your Email Address" />
                    <HeaderButton type="primary">Subscribe</HeaderButton>
                </HeaderInputContainer>
            </NewsletterHeaderSection>
            <HeaderBarContainer>
                {menuItems.map(({ name, menuProps, route }, index) => {
                    if (menuProps) {
                        return (
                            <DropdownMenu key={index} menu={menuProps}>
                                <DropdownButton type="text">
                                    {name}
                                    <DownOutlinedStyled />
                                </DropdownButton>
                            </DropdownMenu>
                        )
                    } else {
                        return (
                            <>
                                <DropdownButton type="text" onClick={() => navigate(`${route}`)}>
                                    {name}
                                </DropdownButton>
                            </>
                        )
                    }

                })}
            </HeaderBarContainer>
        </HeaderContainer>
    )
}

