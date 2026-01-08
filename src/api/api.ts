import * as contentful from 'contentful';
import { log } from '../util/loggerUtil';
import {
    resolveDomainConfiguration,
} from './api.helpers';

// This can be improved using promise all

const contentfulConfig = resolveDomainConfiguration();

log('contentful config:', contentfulConfig);

const client = contentful.createClient({
    ...contentfulConfig,
});

    export const pageTypeApi = client
    .getEntries({ content_type: 'pageType1' })
    //.then(extractFields)
    .then((a) => {
        return a
    });
export const homeContentApi = client
    .getEntries({ content_type: 'homePageIntro' })
    //.then(extractFields)
    .then((a) => {
        return a
    });
    export const sexGodContentApi = client
    .getEntries({ content_type: 'sexGod' })
    .then((a) => {
        return a
    });
