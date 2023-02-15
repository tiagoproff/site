import FooterMenu from 'components/FooterMenu';

import {
  FooterComponent,
  FooterLogo,
  FooterSection,
  FooterSiteDescription,
  FooterSocial,
  FooterWrapper,
  SiteDescription
} from './styles';

import logo from 'assets/images/logo.png';

export default function Footer() {
  return (
    <FooterComponent>
      <FooterSection>
        <FooterWrapper>
          <FooterSiteDescription>
            <FooterLogo src={logo} />
            <SiteDescription>
              Simple Shop © 2023 - Todos os direitos reservados - Simple Shop
              S.A. CNPJ: 12.345.012/0001-67 Avenida Presidente Juscelino
              Kubitschek, 1234, 01º andar, torre 1, Vila Nova Conceição, São
              Paulo, SP, 04543-000
            </SiteDescription>
            <FooterSocial />
          </FooterSiteDescription>
          <FooterMenu />
        </FooterWrapper>
      </FooterSection>
    </FooterComponent>
  );
}
