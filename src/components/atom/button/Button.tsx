import ButtonProps from './type';
import getBtnClasses from './utility';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  variantType = 'filled',
  children,
  type,
  classes,
  onClick,
  isLoading,
  ...restProps
}) => {
  const btnClasses = getBtnClasses({ variant, variantType, classes, isLoading });

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
