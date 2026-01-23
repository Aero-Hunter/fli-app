import useContentful from '../../hooks/useContentful'
import { Ctx } from './Ctx'
import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { pageCode } from './useProjectCtx'
import type { BasicPage, BasicPageType } from './Ctx.types'

export default function CtxProvider(props: PropsWithChildren) {
    const { allEntries } = useContentful()

    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState<string>(
        pageCode.SEX_AND_SALVATION
    )
    const [content, setContent] = useState()

    const getPage = useCallback(
        (code: string) => {
            const page = allEntries?.find(
                (page:BasicPage<BasicPageType>) => page.fields.id === code
            )
            setContent(page)
        },
        [allEntries]
    )

    useEffect(() => {
        setPages(allEntries)
    }, [allEntries, allEntries?.length])
    useEffect(() => {
        getPage(currentPage)
    }, [currentPage, getPage])
    const isLoading = useMemo(() => !content, [content])

    return (
        <Ctx.Provider value={{ isLoading, pages, content, setCurrentPage }}>
            {props.children}
        </Ctx.Provider>
    )
}
