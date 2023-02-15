import { PropsWithChildren } from 'react';

import { MenuItem as MenuItemComponent, MenuItemLink } from './styles';

interface MenuItemProps extends PropsWithChildren {
  to: string;
}

export default function MenuItem({ children, to, ...props }: MenuItemProps) {
  return (
    <MenuItemComponent>
      <MenuItemLink {...props} to={to}>
        {children}
      </MenuItemLink>
    </MenuItemComponent>
  );
}
