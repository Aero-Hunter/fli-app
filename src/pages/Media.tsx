// import useContentful from "../hooks/useContentful"
// import { Image, Typography } from 'antd';


// const { Title, Text } = Typography;

// export const Media = () => {
//     const { websiteMedia } = useContentful();
//     if (!websiteMedia || !Object.keys(websiteMedia).length) {
//         return null;
//     }
//     return (<>
//         {(websiteMedia?.items).map((item: object) => {
//             console.log(item, "media items")
//             return (
//                 <>
//                     <Title>{item.fields.title}</Title>
//                     <Image
//                         width={400}
//                         src={item.fields.video.fields.file.url}
//                     />
//                 </>
//             )
//         })}
//     </>
//     )
// }

