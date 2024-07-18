type Variant = 'outline' | 'filled';

interface CardProps {
  variant: Variant;
  children: React.ReactNode;
  classes?: string;
}

export default CardProps;
