import * as S from './styles';
import Logo from './2.png';

import {
  BrowserRouter as Router,

} from 'react-router-dom';

type Props = {
  open: boolean;
};



function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} />
        <a href="#Roadmap">
          <S.Li>Roadmap</S.Li>
        </a>
        <a href="#Team">
          <S.Li>Team</S.Li>
        </a>
        <a href="#FAQ">
          <S.Li>FAQ</S.Li>
        </a>
      </S.Ul>
    </Router>
    
  );
}

export default RightNav;


/*import IconReact from './2.png';
import IconMegamen from './2.png';
import IconMario from './2.png';
import IconTurtle from './2.png'; */

/*<Switch>
<Route exact path='/menu1'>
  <S.Icon>
    <S.Image src={IconReact} alt='React' />
  </S.Icon>
</Route>
<Route exact path='/menu2'>
  <S.Icon>
    <S.Image src={IconMegamen} alt='Megamen' />
  </S.Icon>
</Route>
<Route exact path='/menu3'>
  <S.Icon>
    <S.Image src={IconMario} alt='Mario' />
  </S.Icon>
</Route>
<Route exact path='/menu4'>
  <S.Icon>
    <S.Image src={IconTurtle} alt='Turtle' />
  </S.Icon>
</Route>

<Redirect to='/menu1' />
</Switch> */