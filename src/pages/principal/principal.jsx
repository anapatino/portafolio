import { Container,Text,Spacer} from '@nextui-org/react'
import {ContainerApp,TransparentLeft,TransparentRight} from '../../styled-components/Containers';
import imagePrincipal from '../../assets/images/picture.png';
import { Navigation } from '../../components/Navbar';
import { About } from '../about/about';
import { Skills } from '../skills/skills';

export function Principal (){ 
    return (
      <Container css={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',flexDirection: 'column'}}>
         <Navigation/>
        <ContainerApp>
          <Container css={{width:'580px',height:'580',position: 'absolute',top:'-40px'}} >
              <img src={imagePrincipal} alt="" height={580} width={580}></img>
          </Container>
          <TransparentRight>
            <Text h2 size={50} weight="bold" css={{letterSpacing: '-1.4px'}}>Designer</Text>
            <Spacer y={0.3}/>
            <Text  size={16.5} weight="hairline">I specialize in creating modern and responsive designs using state of theart technology. My main focus is on building intuitive websites that showcase the brand identity and enhance online presence.</Text>
          </TransparentRight>
          <TransparentLeft>
            <Text h2 size={50} weight="bold">{'<Coder>'}</Text>
            <Spacer y={0.3}/>
            <Text  size={16.5} weight="hairline">I'm passionate about optimizing functionality and speed in every line of code. My goal is to provide a seamless and reliable experience to users, exceeding expectations and supporting the long term success of digital projects.</Text>
          </TransparentLeft>
        </ContainerApp>
        <About/>
        <Skills/>
      </Container>
    );
}