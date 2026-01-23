import { useEffect } from 'react'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { Layout } from '../../components/Layout/Layout'

export default function GodIsTheSource() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.GOD_IS_THE_SOURCE)
    })
    return <Layout />
}
