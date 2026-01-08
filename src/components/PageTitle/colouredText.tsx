import styled from "@emotion/styled";

interface ColouredTextProps {
  color:string;
  flexDirection:string;
  fontSize:string;
  fontweight:string;
  content:string;
}
export default function ColouredText({content,color,flexDirection,fontSize,fontWeight}:ColouredTextProps) {
    return (
        <Text>

        </Text>
    )
}




const Text = styled.div`
display:flex;
flex-direction:${flexDirection};
`