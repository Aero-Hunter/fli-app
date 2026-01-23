import { Layout } from '../../components/Layout/Layout'
import { pageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function Manhood() {
      const { setCurrentPage } = useProjectCtx()
        useEffect(() => {
            setCurrentPage(pageCode.MANHOOD)
        })
    return (
        <>
            <Layout />
        </>
    )
}
