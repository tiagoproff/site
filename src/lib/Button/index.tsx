import { Primary } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  color?: string;
}

export default function Button({ children, color, ...props }: ButtonProps) {
  return (
    <Primary {...props} color={color}>
      {children}
    </Primary>
  );
}
