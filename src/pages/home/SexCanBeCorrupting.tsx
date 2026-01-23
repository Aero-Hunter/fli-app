import { useEffect } from 'react'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { Layout } from '../../components/Layout/Layout'

export default function SexCanBeCorrupting() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.SEX_CAN_BE_CORRUPTING)
    })
    return <Layout />
}
