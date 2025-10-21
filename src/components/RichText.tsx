import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



const H1 = ({ node, children }: any) => <h1>{children}</h1>;
const H2 = ({ node, children }: any) => <h2>{children}</h2>;
const UL = ({ node, children }: any) => <p>{children}</p>;
const Para = ({ node, children }: any) => (
  <p
    style={{
      fontWeight: '400',
      fontSize: '17px',
    }}
  >
    {children}
  </p>
);

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: Para,
    [BLOCKS.HEADING_1]: H1,
    [BLOCKS.HEADING_2]: H2,
    [BLOCKS.UL_LIST]: UL,
  },
};

export const RichText = ({ richTextDocument }: any) =>
  documentToReactComponents(richTextDocument, options);
