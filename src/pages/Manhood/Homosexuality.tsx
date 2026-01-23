import { useEffect } from 'react'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { Layout } from '../../components/Layout/Layout'

export default function Homosexuality() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.HOMOSEXUALITY_THREAT_TO_MANHOOD)
    })
    return <Layout />
}
