import { message, type MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

export const handleMenuClicks = (e: string) => {
    const navigate = useNavigate()
    return navigate(`${e}`)
};

export const aboutItems: MenuProps['items'] = [
    {
        label: 'About FLI',
        key: '1',
    },
    {
        label: 'Our Mission',
        key: '2',
    },
];

export const videoItems: MenuProps['items'] = [
    {
        label: 'Youtube channel',
        key: '1',
    },
    {
        label: 'Podcast',
        key: '2',
    },
];

export const resourceItems: MenuProps['items'] = [
    {
        label: 'Helpful links',
        key: '1',
    },
    {
        label: 'Resources',
        key: '2',
    },
];