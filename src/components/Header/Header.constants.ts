import type { NavigateFunction } from "react-router-dom"

export const menuItems = (nav: NavigateFunction) => {
    return [{
        name: "Home", route: "/home"
    }, {
        name: "God&Sex",
        route: "/God&Sex"
    }, {
        name: "Manhood", menuProps: {
            items: [{
                label: 'Youtube channel',
                key: '1',
                onClick: () => {
                    return (nav("/media"))
                }
            },
            {
                label: 'Podcast',
                key: '2',
                onClick: () => {
                    return (nav("/media"))
                }
            },],
        }
    }, {
        name: "Womanhood",
        route: "/about"
    }, {
        name: "Marriage",
        route: "/about"
    }, {
        name: "The Natural Law & Sex",
        route: "/about"
    }, {
        name: "Purity and Sex", menuProps: {
            items: [{
                label: 'Helpful links',
                key: '1',
                onClick: () => { }
            },
            {
                label: 'Resources',
                key: '2',
                onClick: () => { }
            },],
        }
    }, {
        name: "Chastity & Empowerment",
        route: "/about"
    }, {
        name: "Contraception",
        route: "/about"
    },
    {
        name: "Sex & Disease",
        route: "/about"
    }, {
        name: "Disordered & Hazardous Sex",
        route: "/about"
    }]

}
