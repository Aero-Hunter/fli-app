import { Layout } from '../../components/Layout/Layout'
import { pageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function ArtificialContraception() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(pageCode.ARTIFICIAL_CONTRACEPTION)
    })
    return (
        <>
            <Layout />
        </>
    )
}
