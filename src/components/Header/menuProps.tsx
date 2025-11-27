import { type MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const handleMenuClicks = (e: string) => {
    const navigate = useNavigate()
    return navigate(`${e}`)
};


export const aboutItems: MenuProps['items'] = [
    {
        label: 'About FLI',
        key: '1',
        onClick: () => {
            return (handleMenuClicks("/about"))
        }
    },
    {
        label: 'Our Mission',
        key: '2',
        onClick: () => { }
    },
];

export const videoItems: MenuProps['items'] = [
    {
        label: 'Youtube channel',
        key: '1',
        onClick: () => { }
    },
    {
        label: 'Podcast',
        key: '2',
        onClick: () => { }
    },
];

export const resourceItems: MenuProps['items'] = [
    {
        label: 'Helpful links',
        key: '1',
        onClick: () => { }
    },
    {
        label: 'Resources',
        key: '2',
        onClick: () => { }
    },
];