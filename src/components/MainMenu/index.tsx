import Menu from '../../lib/Menu';
import MenuItem from '../../lib/Menu/MenuItem';

export default function MainMenu() {
  return (
    <Menu>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/catalago">Catalogo</MenuItem>
      <MenuItem to="/contato">Contato</MenuItem>
    </Menu>
  );
}
