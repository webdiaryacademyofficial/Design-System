import ButtonProps from "./type";
import getBtnClasses from "./utility";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  variantType = "filled",
  type = "button",
  onClick,
  children,
  className = "",
  isLoading,
  ...restProps
}) => {
  const defaultClasses = getBtnClasses({ variant, variantType, isLoading });
  const combinedClasses = `${defaultClasses} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...restProps}
    >
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
