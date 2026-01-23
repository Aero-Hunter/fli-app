import { Layout } from '../../components/Layout/Layout'
import { pageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function Womanhood() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(pageCode.WOMANHOOD)
    })
    return (
        <>
            <Layout />
        </>
    )
}
