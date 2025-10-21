import { ThemeProvider } from '@emotion/react'
import theme from "../../../themes/theme"
import { Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { StyledTitle, NewsletterHeaderSection, HeaderInput, HeaderButton, HeaderContainer, HeaderInputContainer, HeaderBarContainer, DropdownButton, DropdownMenu } from './Header.styles';
import { aboutItems, handleMenuClicks, resourceItems, videoItems } from './menuProps';
import { useNavigate } from 'react-router-dom';



export default function Header() {
    const navigate = useNavigate()
    const buttons = [{
        name: "About", menuProps: {
            items: aboutItems,
            onClick: handleMenuClicks,
        }
    }, {
        name: "Videos & Podcasts", menuProps: {
            items: videoItems,
            onClick: handleMenuClicks,
        }
    }, {
        name: "Crusade",
        navigate: "/about"
    }, {
        name: "Fast",
        navigate: "/about"
    }, {
        name: "Icons",
        navigate: "/about"
    }, {
        name: "Resources", menuProps: {
            items: resourceItems,
            onClick: handleMenuClicks,
        }
    }, {
        name: "Donate",
        navigate: "/about"
    }]
    return (
        <ThemeProvider theme={theme}>
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
                    {buttons.map((e, index) => {
                        if (e.hasOwnProperty("menuProps")) {
                            return (
                                <DropdownMenu key={index} menu={e.menuProps}>
                                    <DropdownButton type="text">
                                        <Space>
                                            {e.name}
                                            <DownOutlined />
                                        </Space>
                                    </DropdownButton>
                                </DropdownMenu>
                            )
                        } else {
                            return (
                                <>
                                    <DropdownButton type="text" onClick={() => navigate(`${e.navigate}`)}>
                                        {e.name}
                                    </DropdownButton>
                                </>
                            )
                        }

                    })}
                </HeaderBarContainer>
            </HeaderContainer>
        </ThemeProvider >
    )
}

