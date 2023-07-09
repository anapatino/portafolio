import { Text,Spacer,Container} from "@nextui-org/react";
import { ContainerApp } from "../../styled-components/Containers";
import "./skills.css";
import cloudflare from '../../assets/images/cloudflare.png';
import css from '../../assets/images/css.png';
import estibador from '../../assets/images/estibador.png';
import git from '../../assets/images/git.png';
import github from '../../assets/images/github.png';
import js from '../../assets/images/js.png';
import oraculo from '../../assets/images/oraculo.png';


export function Skills (){
    return(
        <ContainerApp >
        <Text h1 size={50} weight="bold" css={{letterSpacing:'3px',margin:'0'}}>Skills</Text>
        <Spacer y={2}/>
        <Container className="carrusel" css={{margin:'10px'}}> 
        <img src={cloudflare} alt="" height={64} width={64}></img>
        <Spacer x={1}/>
        <img src={css} alt="" height={64} width={64}></img>
        <Spacer x={1}/>
        <img src={estibador} alt="" height={64} width={64}></img>
        <Spacer x={1}/>
        <img src={git} alt="" height={64} width={64}></img>
        <Spacer x={1}/>
        <img src={github} alt="" height={64} width={64}></img>
        <Spacer x={1}/>
        <img src={js} alt="" height={64} width={64}></img>
        <Spacer x={1}/>
        <img src={oraculo} alt="" height={64} width={64}></img>
        </Container>

        </ContainerApp>
    );
}