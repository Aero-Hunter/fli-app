import { useEffect } from 'react'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { Layout } from '../../components/Layout/Layout'

export default function ThreatsToManhood() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.THREATS_TO_MANHOOD)
    })
    return <Layout />
}
