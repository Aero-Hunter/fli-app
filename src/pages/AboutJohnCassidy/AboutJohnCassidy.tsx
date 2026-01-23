import { Layout } from '../../components/Layout/Layout'
import { pageCode, useProjectCtx } from '../../api/Ctx/useProjectCtx'
import { useEffect } from 'react'

export default function AboutJohnCassidy() {
    const { setCurrentPage } = useProjectCtx()
    useEffect(() => {
        setCurrentPage(pageCode.ABOUT_JOHN_CASSIDY)
    })
    return (
        <>
            <Layout />
        </>
    )
}
