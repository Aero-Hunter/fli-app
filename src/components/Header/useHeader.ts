import { useNavigate } from 'react-router-dom';
import { menuItems } from './Header.constants';

export const useHeader = () => {
    const navigate = useNavigate()
    return { menuItems: menuItems(navigate) }
};