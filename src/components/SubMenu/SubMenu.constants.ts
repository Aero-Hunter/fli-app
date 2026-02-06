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
                label: 'Feminism as a Threat to Manhood',
                key: '3',
                route: '/FeminismAsThreatToManhood',
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
                route: '/ThreatsToWomanhood',
            },
            {
                label: 'Feminism',
                key: '2',
                route: '/Feminism',
            },
            {
                label: 'Arteficial Contraception & Abortion',
                key: '3',
                route: '/ArteficialContraception',
            },
            {
                label: 'Workdom & Serfdom',
                key: '4',
                route: '/WorkdomAndSerfdom',
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
                route: '/MarriageMatters',
            },
            {
                label: 'Sex in Marriage',
                key: '2',
                route: '/SexInMarriage',
            },
            {
                label: 'Procreation',
                key: '3',
                route: '/Procreation',
            },
            // {
            //     label: 'Threats to Marriage',
            //     key: '4',
            //     route: '/ThreatsToMarriage',
            // },
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
                route: '/WomanAtWell',
            },
            {
                label: 'Fornication',
                key: '2',
                route: '/Fornication',
            },
            {
                label: 'Sexual Tyranny',
                key: '3',
                route: '/SexualTyranny',
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
                route: '/SexAndDisease',
            },
        ],
    },
    {
        name: 'The Natural Law & Sex',
        id: pageCode.THE_NATURAL_LAW,
        route: '/TheNaturalLaw',
        // subMenuItems: [
        //     {
        //         label: 'Sex Becomes a Scourge',
        //         key: '1',
        //         route: '/about',
        //     },
        // ],
    },
    {
        name: 'Artificial Contraception',
        id: pageCode.ARTIFICIAL_CONTRACEPTION,
        route: '/ArtificialContraception',
    },
    {
        name: 'About John Cassidy',
        id: pageCode.ABOUT_JOHN_CASSIDY,
        route: '/AboutJohnCassidy',
        subMenuItems: [
            // {
            //     label: 'Living With Homosexuality',
            //     key: '1',
            //     route: '/LivingWithHomosexuality',
            // },
            // {
            //     label: "John's Conversion",
            //     key: '2',
            //     route: '/JohnsConversion',
            // },
            // {
            //     label: 'Sex & Grace or Disgrace',
            //     key: '3',
            //     route: '/SexAndDisgrace',
            // },
            // {
            //     label: 'Sexual Empowerment',
            //     key: '4',
            //     route: '/SexualEmpowerment',
            // },
            // {
            //     label: 'Catholic Church and Homosexuality',
            //     key: '5',
            //     route: '/CatholicChurch',
            // },
        ],
    },
]
