import { useNavigate } from 'react-router-dom';
import { Container, StyledButton } from './SubMenu.styles';
import { menuItems } from '../Header/Header.constants';

interface SubMenuItemProps {
    label:string;
    key:string;
    route:string;
}

interface SubMenuProps{
    title:string;
}
export default function SubMenu({title}:SubMenuProps) {
    const pageName = title.split(" ").join("");
    console.log(pageName,"title")
    const navigate = useNavigate();
    const currentPath = (window.location.href).split("/").at(-1);
    return (
        <Container>
           {menuItems.find(item => item.name === title)?.subMenuItems.map((({label,key,route}:SubMenuItemProps) => {
        return <StyledButton type="text" key={key} onClick={()=>navigate(route)} disabled={route==currentPath}>{label}</StyledButton>
    }))
}
            </Container>
    )
}

