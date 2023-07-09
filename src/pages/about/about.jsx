import { Text,Spacer,Button} from "@nextui-org/react";
import { ContainerAbout } from "../../styled-components/Containers";

export function About (){
    return(
        <ContainerAbout >
        <Text h1 size={60} weight="bold" css={{letterSpacing:'-3px',margin:'0'}}>Hello.</Text>
        <Spacer y={0.001}/>
        <Text h1 size={60} weight="bold" css={{letterSpacing:'2px',margin:'0'}}>I am Ana Sofia</Text>
        <Spacer y={0.4}/>
        <Text  size={16} weight="thin" css={{width:'35rem',letterSpacing:'2px',margin:'0'}}>Ana Sofía Patiño Aliendra is a proactive and dynamic university student, accustomed to autonomously solving problems and handling unforeseen events, which allows her to successfully combine different tasks. Each piece in this portfolio reflects my dedication and passion for my craft.</Text>
        <Spacer y={1}/>
        <a href="https://drive.google.com/file/d/1VVOXSYwWPt9fALq9XqXzNcQIKdP9IqRN/view?usp=drive_link" download>
            <Button rounded >Download</Button>
        </a>
        </ContainerAbout>
    );
}