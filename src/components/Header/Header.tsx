import { menuItems } from '../SubMenu/SubMenu.constants';
import { DropDownButton, HeaderContainer } from './Header.styles';
import { useNavigate } from 'react-router-dom';

interface MenuItemsProps {
    name?:string;
    route?:string;
}



export default function Header() {
    const navigate = useNavigate()
    return (
        <HeaderContainer>
            {menuItems.map(({ name, route }:MenuItemsProps) => {
                        return (
                            <>
                                <a onClick={() => navigate(`${route}`)}>
                                    <DropDownButton>
                                        {name}

                                    </DropDownButton>
                                </a>
                            </>
                        )
                    }
            )}
        </HeaderContainer>
    )
}

