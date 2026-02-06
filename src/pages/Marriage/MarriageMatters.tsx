import { Layout } from '../../components/Layout/Layout'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function MarriageMatters() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.WHY_MARRIAGE_MATTERS)
    })
    return (
        <>
            <Layout />
        </>
    )
}
