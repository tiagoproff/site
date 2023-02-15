import { SectionComponent, SectionWrapper } from './styles';

interface SectionProps extends React.BaseHTMLAttributes<any> {}

export default function Section({ children, ...props }: SectionProps) {
  return (
    <SectionComponent {...props}>
      <SectionWrapper>{children}</SectionWrapper>
    </SectionComponent>
  );
}
