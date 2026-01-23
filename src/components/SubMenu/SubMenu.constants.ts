import { pageCode } from '../../api/Ctx/useProjectCtx'

export const menuItems = [
    {
        name: 'Sex and Salvation',
        id: pageCode.SEX_AND_SALVATION,
        route: '/home',
        subMenuItems: [
            {
                label: 'Sex can be Corrupting',
                key: '1',
                route: '/SexCanBeCorrupting',
            },
            {
                label: 'Human Freedom',
                key: '2',
                route: '/HumanFreedom',
            },
        ],
    },
    {
        name: 'God & Sex',
        id: pageCode.GOD_AND_SEX,
        route: '/God&Sex',
        subMenuItems: [
            {
                label: 'God is the Source',
                key: '1',
                route: '/GodIsTheSource',
            },
        ],
    },
    {
        name: 'Manhood',
        id: pageCode.MANHOOD,
        route: '/Manhood',
        subMenuItems: [
            {
                label: 'Threats to Manhood',
                key: '1',
                route: '/ThreatsToManhood',
            },
            {
                label: 'Homosexuality as a Threat to Manhood',
                key: '2',
                route: '/Homosexuality',
            },
            {
                label: 'Femenism as a Threat to Manhood',
                key: '3',
                route: '/FemenismAsThreatToManhood',
            },
            {
                label: 'Pornography & Vice as Threats to Manhood',
                key: '4',
                route: '/Vice',
            },
            {
                label: 'The Threat of Artificial Insemination & Sperm Banks',
                key: '5',
                route: '/Insemination',
            },
        ],
    },
    {
        name: 'Womanhood',
        id: pageCode.WOMANHOOD,
        route: '/Womanhood',
        subMenuItems: [
            {
                label: 'Threats to Womanhood',
                key: '1',
                route: '/about',
            },
            {
                label: 'Femenism',
                key: '2',
                route: '/about',
            },
            {
                label: 'Arteficial Contraception & Abortion',
                key: '3',
                route: '/about',
            },
            {
                label: 'Workdom & Serfdom',
                key: '4',
                route: '/about',
            },
        ],
    },
    {
        name: 'Marriage',
        id: pageCode.MARRIAGE,
        route: '/Marriage',
        subMenuItems: [
            {
                label: 'Why Marriage Matters',
                key: '1',
                route: '/about',
            },
            {
                label: 'Sex in Marriage',
                key: '2',
                route: '/about',
            },
            {
                label: 'Procreation',
                key: '3',
                route: '/about',
            },
            {
                label: 'Threats to Marriage',
                key: '4',
                route: '/about',
            },
        ],
    },
    {
        name: 'Chastity & Empowerment ',
        id: pageCode.CHASTITY_AND_EMPOWERMENT,
        route: '/ChastityAndEmpowerment',
        subMenuItems: [
            {
                label: 'The Woman at the Well',
                key: '1',
                route: '/about',
            },
            {
                label: 'Fornication',
                key: '2',
                route: '/about',
            },
            {
                label: 'Sexual Tyranny',
                key: '3',
                route: '/about',
            },
        ],
    },
    {
        name: 'Sex & Purity',
        id: pageCode.PURITY_AND_SEX,
        route: '/PurityAndSex',
        subMenuItems: [
            {
                label: 'Sex & Disease',
                key: '1',
                route: '/about',
            },
        ],
    },
    {
        name: 'The Natural Law & Sex',
        id: pageCode.THE_NATURAL_LAW,
        route: '/TheNaturalLaw',
        subMenuItems: [
            {
                label: 'Sex Becomes a Scourge',
                key: '1',
                route: '/about',
            },
        ],
    },
    {
        name: 'Arteficial Contraception',
        id: pageCode.ARTIFICIAL_CONTRACEPTION,
        route: '/ArteficialContraception',
    },
    {
        name: 'About John Cassidy',
        route: '/about',
        subMenuItems: [
            {
                label: 'Living With Homosexuality',
                key: '1',
                route: '/about',
            },
            {
                label: "John's Conversion",
                key: '2',
                route: '/about',
            },
            {
                label: 'Sex & Grace or Disgrace',
                key: '3',
                route: '/about',
            },
            {
                label: 'Sexual Empowerment',
                key: '4',
                route: '/about',
            },
            {
                label: 'Catholic Church and Homosexuality',
                key: '4',
                route: '/about',
            },
        ],
    },
]
