import { useContext } from 'react'
import { Ctx } from './Ctx'
import type { BasicPage, BasicPageType } from './Ctx.types'

export const pageCode = {
    SEX_AND_SALVATION: 'sex_and_salvation',
    GOD_AND_SEX: 'god_and_sex',
    MANHOOD: 'manhood',
    WOMANHOOD: 'womanhood',
    MARRIAGE: 'marriage',
    CHASTITY_AND_EMPOWERMENT: 'chastity_and_empowerment',
    PURITY_AND_SEX: 'sex_and_purity',
    THE_NATURAL_LAW: 'the_natural_law',
    ARTIFICIAL_CONTRACEPTION: 'artificial_contraception',
    ABOUT_JOHN_CASSIDY: 'about_john_cassidy',
}

export const subMenuPageCode = {
    SEX_CAN_BE_CORRUPTING: 'sex_can_be_corrupting',
    HUMAN_FREEDOM: 'human_freedom',
    GOD_IS_THE_SOURCE: 'god_is_the_source',
    THREATS_TO_MANHOOD: 'threats_to_manhood',
    HOMOSEXUALITY_THREAT_TO_MANHOOD: 'homosexuality_threat_to_manhood',
    Feminism_THREAT_TO_MANHOOD: 'feminism_threat_to_manhood',
    VICE_THREAT_TO_MANHOOD: 'vice_threat_to_manhood',
    INSEMINATION: 'insemination',
    //Below titles do no have any content yet
    THREATS_TO_WOMANHOOD: 'threats_to_womanhood',
    Feminism: 'feminism',
    ABORTION: 'abortion',
    WORKDOM_SERFDOM: 'workdom_serfdom',
    WHY_MARRIAGE_MATTERS: 'why_marriage_matters',
    SEX_IN_MARRIAGE: 'sex_in_marriage',
    PROCREATION: 'procreation',
    THREATS_TO_MARRIAGE: 'threats_to_marriage',
    WOMAN_AT_WELL: 'woman_at_well',
    FORNICATION: 'fornication',
    SEXUAL_TYRANNY: 'sexual_tyranny',
    SEX_AND_DISEASE: 'sex_and_disease',
    LIVING_WITH_HOMOSEXUALITY: 'living_with_homosexuality',
    JOHNS_CONVERSION: 'johns_conversion',
    SEX_AND_DISGRACE: 'sex_and_disgrace',
    SEXUAL_EMPOWERMENT: 'sexual_empowerment',
    CATHOLIC_CHURCH_AND_HOMOSEXUALITY: 'catholic_church_and_homosexuality',
}

export const useProjectCtx = <T extends BasicPageType>() => {
    const { content, setCurrentPage, isLoading } = useContext(Ctx)
    const contentTyped = content as BasicPage<T>

    return {
        content: contentTyped,
        setCurrentPage,
        isLoading,
    }
}
