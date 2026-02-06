import { Layout } from '../../components/Layout/Layout'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function Fornication() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.FORNICATION)
    })
    return (
        <>
            <Layout />
        </>
    )
}
