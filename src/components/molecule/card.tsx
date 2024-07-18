import CardProps from './type';
import classNames from 'classnames';

const Card: React.FC<CardProps> = ({ variant='filled', children, classes }) => {
  const cardClasses = classNames(
    'card rounded',
    {
      'border border-green-500 border-solid': variant === 'outline',
      'bg-blue-700 text-white': variant === 'filled',
    },
    classes,
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
