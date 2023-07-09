import { Nav,Title,ListItems} from "../styled-components/Navbar";
import {Link}  from "react-router-dom";
import { Spacer } from "@nextui-org/react";
export function Navigation() {
  return (
    <Nav>
    <div className="nLogo">
      <Title >ANAPÉ</Title>
    </div>
    <ListItems>
        <Link to="about" style={{ color: '#FFF',fontSize: '15px',fontWeight:'300',letterSpacing:'2px' }}>
          About
        </Link>
      <Spacer x={1.5}/>
        <Link to="work" style={{ color: '#FFF' ,fontSize: '15px',fontWeight:'300',letterSpacing:'2px' }}>
          Work
        </Link>
      <Spacer x={0.4}/>
        <Link to="contact" style={{ color: '#FFF',fontSize: '15px',fontWeight:'300',letterSpacing:'2px'  }}>
          Contact
        </Link>
    </ListItems>
  </Nav>
  );
}