import { useEffect, useState } from 'react';
import {
    blogApi,
    websiteMediaApi,
    websiteStaticTextApi
} from '../api/api';

const useContentful = () => {
    const [blog, setBlogList] = useState([]);
    const [websiteStaticText, setwebsiteStaticText] = useState([]);
    const [websiteMedia, setWebsiteMedia] = useState([]);

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

    }, []);
    return {
        blog,
        websiteStaticText,
        websiteMedia
    };
};

export default useContentful;
