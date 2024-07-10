import ButtonProps from "./type";
import classNames from "classnames";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  variantType = "filled",
  children,
  type,
  classes,
  onClick,
  isLoading,
  ...restProps
}) => {
  // Classes
  const btnClasses = classNames(
    "py-2 px-4 rounded cursor-pointer",
    {
      "bg-primary text-white font-bold":
        variant === "primary" && variantType === "filled",
      "bg-secondary text-white font-bold":
        variant === "secondary" && variantType === "filled",
      "bg-tertiary text-white font-bold":
        variant === "tertiary" && variantType === "filled",
      "border-2 border-primary text-white font-bold":
        variant === "primary" && variantType === "outline",
      "border-2 border-secondary text-white font-bold":
        variant === "secondary" && variantType === "outline",
      "border-2 border-tertiary text-white font-bold":
        variant === "tertiary" && variantType === "outline",
      "cursor-not-allowed opacity-50": isLoading,
    },
    classes
  );

  return (
    <button type={type} className={btnClasses} onClick={onClick} {...restProps}>
      <span className="flex items-center justify-center gap-3">
        {children}
        {isLoading && (
          <span className="border-gray-300 h3 w-3 rounded-full animate-spin border-8 border-t-blue-600"></span>
        )}
      </span>
    </button>
  );
};

export default Button;
