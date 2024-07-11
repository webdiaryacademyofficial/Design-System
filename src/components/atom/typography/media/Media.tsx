import { FC } from 'react';
import MediaProps from './type';

const Media: FC<MediaProps> = ({ type, src, alt, containerClasses, mediaClasses }) => {
  return (
    <div className={containerClasses}>
      {type === 'image' ? (
        <img src={src} alt={alt} className={mediaClasses} />
      ) : (
        <video src={src} />
      )}
    </div>
  );
};

export default Media;
