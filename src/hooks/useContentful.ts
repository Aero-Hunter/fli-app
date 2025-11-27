import { useEffect, useState } from 'react';
import {
    blogApi,
    websiteMediaApi,
    websiteStaticTextApi,
    homeContentApi,
    sexGodContentApi

} from '../api/api';

const useContentful = () => {
    const [blog, setBlogList] = useState([]);
    const [websiteStaticText, setwebsiteStaticText] = useState([]);
    const [websiteMedia, setWebsiteMedia] = useState([]);
    const [homeContent, setHomeContent] = useState([]);
    const [sexGodContent, setSexGodContent] = useState([]);

    useEffect(() => {
        blogApi.then((response) => {
            setBlogList(response ?? {});
        });
        websiteStaticTextApi.then((response) => {
            setwebsiteStaticText(response ?? {});
        });
        websiteMediaApi.then((response) => {
            setWebsiteMedia(response ?? {});
        });
        homeContentApi.then((response) => {
            setHomeContent(response ?? {});
        });
        sexGodContentApi.then((response) => {
            setSexGodContent(response ?? {});
        });

    }, []);
    return {
        blog,
        websiteStaticText,
        websiteMedia,
        homeContent,
        sexGodContent
    };
};

export default useContentful;
