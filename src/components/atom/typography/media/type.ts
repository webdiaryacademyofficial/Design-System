export type MediaType = 'image' | 'video';

export type CommonProps = {
  type: MediaType;
  src: string;
  alt: string;
  containerClasses?: string;
  mediaClasses?: string;
}

export type ImageProps = CommonProps & React.ImgHTMLAttributes<HTMLImageElement>;
export type VideoProps = CommonProps & React.VideoHTMLAttributes<HTMLVideoElement>;

export type MediaProps = ImageProps | VideoProps







