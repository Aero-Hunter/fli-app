import { MainContainer, TextContainer,Title,Text,EqualContainer } from "./PageTitle.styles";

interface PageTitleProps {
  titleData: {
    title: string;
    subText: string;
    color:string;
    primaryColor:string;
  };
}
export default function PageTitle({titleData}:PageTitleProps) {
    const title = ["Love","God","Be","Transformed"]
    return (
        <MainContainer>
            <TextContainer>
                <MainContainer>
                {title.map((e)=>{
                    return(
                        
                            <Title style={{color:`${titleData.color}`}}>{e}</Title>
                       
                    )
                })}
                 </MainContainer>
                 <EqualContainer style={{color:`${titleData.color}`}}>=</EqualContainer>
                <Title style={{color:`${titleData.primaryColor}`, alignSelf:"flex-end"}}>{titleData.title}</Title>
            </TextContainer>
            <Text style={{color:`${titleData.primaryColor}`}}>{titleData.subText}</Text>
        </MainContainer>
    )
}

