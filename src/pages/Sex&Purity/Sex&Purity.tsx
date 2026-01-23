import { Layout } from '../../components/Layout/Layout'
import { pageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function PurityAndSex() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(pageCode.PURITY_AND_SEX)
    })
    return (
        <>
            <Layout />
        </>
    )
}
