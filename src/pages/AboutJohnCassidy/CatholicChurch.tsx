import { Layout } from '../../components/Layout/Layout'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function CatholicChurch() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.CATHOLIC_CHURCH_AND_HOMOSEXUALITY)
    })
    return (
        <>
            <Layout />
        </>
    )
}
