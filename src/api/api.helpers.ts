import { contentfulConfig } from './api.config';

export const parseArray = (array:any) =>
  array.reduce(({acc, item}:any) => ({ ...acc, [item.key]: item }), {});

export const extractField = ({ fields, sys }:any) => ({ ...fields, id: sys.id });

export const first = (items:any) => items[0];

export const extractFields = ({ items = [] }) => items.map(extractField);

export const extractPicture = ({contentModel, pictureKey = 'picture'}:any) => {
  try {
    const {
      [pictureKey]: {
        fields: {
          file: { url },
        },
      },
    } = contentModel;

    return url;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      `Unable to extract picture under key ${pictureKey}`,
      e,
      contentModel
    );
    return '';
  }
};

export const extractPictures = ({contentObject, pictureKey = 'picture'}:any) => {
  console.log(contentObject);
  return contentObject[pictureKey].map((element:any) => element.fields.file.url);
};

export const extractRichText = ({section, key = 'body'}:any) => {
  const {
    [key]: {
      content: [
        {
          content: [{ value }],
        },
      ],
    },
  } = section;

  return value;
};

export const resolveDomainConfiguration = () => {
  const { hostname } = window.location;

  return contentfulConfig[hostname.replace('www.', '')];
};
