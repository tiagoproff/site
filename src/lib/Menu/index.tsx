import { PropsWithChildren } from 'react';

import { MenuComponent, MenuItems } from './styles';

export default function Menu({ children, ...props }: PropsWithChildren) {
  return (
    <MenuComponent>
      <MenuItems {...props}>{children}</MenuItems>
    </MenuComponent>
  );
}
