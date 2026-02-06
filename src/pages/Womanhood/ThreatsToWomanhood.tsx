import { Layout } from '../../components/Layout/Layout'
import { subMenuPageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function ThreatsToWomanhood() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(subMenuPageCode.THREATS_TO_WOMANHOOD)
    })
    return (
        <>
            <Layout />
        </>
    )
}
