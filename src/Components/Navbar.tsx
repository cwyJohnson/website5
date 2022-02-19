import * as S from './styles';

import Logo from './2.png';
import Burger from './Burger';

type Props = {
  children?: ChildNode;
};

export default function Navbar(props: Props) {
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
