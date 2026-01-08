import { useEffect, useState } from 'react';
import {
    homeContentApi,
    pageTypeApi,
    sexGodContentApi

} from '../api/api';
import type { ContentResponse } from '../types/contentTypes';

const useContentful = () => {
    const [homeContent, setHomeContent] = useState<ContentResponse>();
    const [sexGodContent, setSexGodContent] = useState<ContentResponse>();
    const [pageType, setPageTypeApi] = useState<ContentResponse>();

    useEffect(() => {
        pageTypeApi.then((response:any) => {
            setPageTypeApi(response ?? {});
        });
        homeContentApi.then((response:any) => {
            setHomeContent(response ?? {});
        });
        sexGodContentApi.then((response:any) => {
            setSexGodContent(response ?? {});
        });

    }, []);
    return {
        homeContent,
        sexGodContent,
        pageType
    };
};

export default useContentful;
