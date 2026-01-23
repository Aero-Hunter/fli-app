import { useEffect } from 'react'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { Layout } from '../../components/Layout/Layout'

export default function Insemination() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.INSEMINATION)
    })
    return <Layout />
}
