import { Layout } from '../../components/Layout/Layout'
import { pageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function ChastityAndEmpowerment() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(pageCode.CHASTITY_AND_EMPOWERMENT)
    })
    return (
        <>
            <Layout />
        </>
    )
}
