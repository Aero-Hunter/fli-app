import { Layout } from '../../components/Layout/Layout'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function ArteficialContraception() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.ABORTION)
    })
    return (
        <>
            <Layout />
        </>
    )
}
