import { PropsWithChildren } from 'react';

import { ChipComponent, ChipLabel } from './styles';

export default function Chip({ children }: PropsWithChildren) {
  return (
    <ChipComponent>
      <ChipLabel>{children}</ChipLabel>
    </ChipComponent>
  );
}
