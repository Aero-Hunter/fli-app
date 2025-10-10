import { useEffect, useState } from 'react';
import {
    blogApi,
} from '../api/api';

const useContentful = () => {
    const [blog, setBlogList] = useState([]);


    useEffect(() => {
        blogApi.then((response:any) => {
            setBlogList(response ?? {});
        });
    }, []);

    return {
        blog,
    };
};

export default useContentful;
