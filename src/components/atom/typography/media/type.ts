type MediaType = "image" | "video";

interface MediaProps {
  type: MediaType;
  src: string;
  alt: string;
  containerClasses?: string;
  mediaClasses?: string;
  showControls?: boolean;
}

export default MediaProps;
