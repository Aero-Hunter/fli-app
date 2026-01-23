import { contentfulConfig } from './api.config';


export const resolveDomainConfiguration = () => {
  const { hostname } = window.location;
  if(!hostname){
    throw Error(`Cannot find contentful configuration for this domain:${window.location}`)
  }

  return contentfulConfig[hostname.replace('www.', '')];
};
