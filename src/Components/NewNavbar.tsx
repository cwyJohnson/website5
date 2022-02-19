import * as S from './styles';

import Logo from './2.png';
import Burger from './Burger';


type Props = {
    children?: ChildNode;
  };
  


export default function NewNavbar(props: Props) {
    return (
      <>
        <S.Nav>
          <S.Logo src={Logo} alt='Gustavo Scarpim' />
        </S.Nav>
        <Burger />
        {props.children}
      </>
    );
  }
  

/*const NewNavbar =() => {
    return(
    <Container>
        <Title>
            IT DOG
        </Title>
        <Link>
           <li><a href="#roadmap"> Roadmap </a></li>
           <li><a href="#Team"> Team </a></li>
           <li><a href="#FAQ"> FAQ </a></li>
        </Link>
    </Container>
    )
} */

/*import styled from "styled-components";
const Container = styled("div")`
    width: 100vw;
    height: 100px;
    background-color: #af48ca;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position:relative;

`
const Link = styled("a")`
    font-size: 1.5rem;
    margin: 1rem;
    color: initial;
    position:absolute;
    right: 5%;
    li {
        display: inline;
        padding: 8px;
      }
    li a{
        text-decoration: none;
        list-style-type: none;
    }
    @media (max-width: 700px){
        position: initial;
    }
    a {
        text-decoration: none;
        color: white;
    }
    a:hover{

    }
`

const Title = styled("h1")`
    margin: 0;
    white-space: nowrap;
    font-family: 'Bungee', cursive;
`*/