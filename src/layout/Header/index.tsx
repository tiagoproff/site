import MainMenu from 'components/MainMenu';

import { HeaderComponent, HeaderLogo, HeaderWrapper } from './styles';

import logo from 'assets/images/logo.png';

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderWrapper>
        <HeaderLogo src={logo} />
        <MainMenu />
      </HeaderWrapper>
    </HeaderComponent>
  );
}
