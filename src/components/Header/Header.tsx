// import { Dropdown } from 'antd';
import { menuItems } from './Header.constants';
import { DropDownButton, HeaderContainer } from './Header.styles';
// import { DownOutlined } from '@ant-design/icons';
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
                // if (index < menuItems.length - 3) {
                    // if (menuProps) {
                    //     return (
                    //         <Dropdown menu={menuProps}>
                    //             <a onClick={(e) => e.preventDefault()}>
                    //                 <DropDownButton>
                    //                     {name}
                    //                     <DownOutlined />
                    //                 </DropDownButton>
                    //             </a>
                    //         </Dropdown>
                    //     )
                    // } else {
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
                // }
            )}
        </HeaderContainer>
    )
}

