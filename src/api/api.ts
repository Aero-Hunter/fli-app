import * as contentful from 'contentful';
import { log } from '../util/loggerUtil';
import {
    first,
    extractFields,
    parseArray,
    resolveDomainConfiguration,
} from './api.helpers';

// This can be improved using promise all

const contentfulConfig = resolveDomainConfiguration();

log('contentful config:', contentfulConfig);

const client = contentful.createClient({
    ...contentfulConfig,
});

// export const globalApi = client
//     .getEntries({ content_type: 'general' })
//     .then(extractFields)
//     .then(first);

export const blogApi = client
    .getEntries({ content_type: 'blogPost' })
    .then(extractFields)
    .then(parseArray);
