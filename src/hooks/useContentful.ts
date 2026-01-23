import { useEffect, useState } from 'react'
import { allEntriesApi } from '../api/api'

const useContentful = () => {
    const [allEntries, setAllEntriesApi] = useState<any>()

    useEffect(() => {
        allEntriesApi.then((response: any) => {
            setAllEntriesApi(response ?? {})
        })
    }, [])
    return {
        allEntries,
    }
}

export default useContentful
