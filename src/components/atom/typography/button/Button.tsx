import ButtonProps from "./type";

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  classes,
  onClick,
  ...restProps
}) => {
  return (
    <button type={type} className={classes} onClick={onClick} {...restProps}>
      <span className="flex items-center justify-center gap-3">{children}</span>
    </button>
  );
};

export default Button;
