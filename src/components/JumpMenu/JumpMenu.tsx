
// import { CounterText, ItemContainer, MainContainer, StyledText, StyledTitle } from './JumpMenu.styles';



// export const JumpMenu = (menuItems: object) => {
//     let counter = 0;
//     return (<MainContainer>
//         <StyledTitle>JUMP TO</StyledTitle>
//         {(menuItems.menuItems).map((item: object,) => {
//             if (item.nodeType === "heading-1") {
//                 counter++
//                 return (
//                     <ItemContainer>
//                         <CounterText>{counter}</CounterText>
//                         <StyledText onClick={() => {
//                             const element = document.getElementById(`${item.content[0].value}`);
//                             element?.scrollIntoView({
//                               behavior: 'smooth'
//                             });
//                         }}>{item.content[0].value}</StyledText>
//                     </ItemContainer>
//                 )
//             }
//         })}</MainContainer >
//     )
// }

