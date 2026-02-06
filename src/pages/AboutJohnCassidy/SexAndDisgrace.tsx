import { Layout } from '../../components/Layout/Layout'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function SexAndDisgrace() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.SEX_AND_DISGRACE)
    })
    return (
        <>
            <Layout />
        </>
    )
}
