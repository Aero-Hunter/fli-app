import { Layout } from '../../components/Layout/Layout'
import { pageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function TheNaturalLaw() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(pageCode.THE_NATURAL_LAW)
    })
    return (
        <>
            <Layout />
        </>
    )
}
