type ButtonType = "submit" | "reset" | "button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  classes?: string;
  onclick?: () => void;
}

export default ButtonProps;
