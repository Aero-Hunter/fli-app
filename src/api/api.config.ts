interface Config {
  environment: string;
  space: string;
  accessToken: string;
  host: string;
}

export const contentfulConfig: Record<string, Config> = {
  localhost: {
    environment: 'master',
    space: 'qj7s2ba7jatt',
    accessToken: '8Kf_DbCC3CTRFEclJW_W48uKeKQ6nrZG6hVFnyCxX78',
    host: 'preview.contentful.com',
  },
  "sex-and-salvation.org": {
    environment: 'master',
    space: 'qj7s2ba7jatt',
    accessToken: '8Kf_DbCC3CTRFEclJW_W48uKeKQ6nrZG6hVFnyCxX78',
    host: 'preview.contentful.com',
  }
};

