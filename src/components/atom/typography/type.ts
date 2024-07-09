interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
  classes?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export default TypographyProps;
