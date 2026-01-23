import * as contentful from 'contentful';
import { log } from '../util/loggerUtil';
import {
    resolveDomainConfiguration,
} from './api.helpers';

const contentfulConfig = resolveDomainConfiguration();

log('contentful config:', contentfulConfig);

const client = contentful.createClient({
    ...contentfulConfig,
});
    export const allEntriesApi = client.getEntries().then((a)=>{
        return a.items
    })