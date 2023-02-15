import {
  FooterHighLightedMenuItem,
  FooterMenu,
  FooterMenuItem,
  Menus,
} from './styles';

export default function MainMenu() {
  return (
    <Menus>
      <FooterMenu>
        <FooterHighLightedMenuItem to="/">Home</FooterHighLightedMenuItem>
        <FooterMenuItem to="/catalago">Catalogo</FooterMenuItem>
        <FooterMenuItem to="/contato">Contato</FooterMenuItem>
      </FooterMenu>
      <FooterMenu>
        <FooterHighLightedMenuItem to="/">Catalogo</FooterHighLightedMenuItem>
        <FooterMenuItem to="/catalago/audio">Áudio</FooterMenuItem>
        <FooterMenuItem to="/catalago/beleza">
          Beleza e perfumaria
        </FooterMenuItem>
        <FooterMenuItem to="/catalago/cama-mesa-banho">
          cama, mesa e banho
        </FooterMenuItem>
        <FooterMenuItem to="/catalago/celulares">Celulares</FooterMenuItem>
        <FooterMenuItem to="/catalago/eletrodomesticos">
          Eletrodomésticos
        </FooterMenuItem>
        <FooterMenuItem to="/catalago/esportes-lazer">
          Esportes e lazer
        </FooterMenuItem>
      </FooterMenu>
      <FooterMenu>
        <FooterHighLightedMenuItem to="/">
          Redes Sociais
        </FooterHighLightedMenuItem>
        <FooterMenuItem to="https://facebook.com/">Facebook</FooterMenuItem>
        <FooterMenuItem to="https://instagram.com/">Instagram</FooterMenuItem>
        <FooterMenuItem to="https://www.twitter.com/">Twitter</FooterMenuItem>
        <FooterMenuItem to="https://www.youtube.com/">YouTube</FooterMenuItem>
      </FooterMenu>
      <FooterMenu>
        <FooterHighLightedMenuItem to="/">Contato</FooterHighLightedMenuItem>
        <FooterMenuItem to="/contato/comprar">Comprar</FooterMenuItem>
        <FooterMenuItem to="/contato/vender">Vender</FooterMenuItem>
        <FooterMenuItem to="/contato/seguranca">Segurança</FooterMenuItem>
      </FooterMenu>
    </Menus>
  );
}
