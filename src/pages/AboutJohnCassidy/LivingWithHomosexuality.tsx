import { Layout } from '../../components/Layout/Layout'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function LivingWithHomosexuality() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.LIVING_WITH_HOMOSEXUALITY)
    })
    return (
        <>
            <Layout />
        </>
    )
}
