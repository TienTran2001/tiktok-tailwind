import { useState } from "react";
import images from "~/assets/images";
function Image({
  src,
  alt,
  fallback: currentImage = images.noImage,
  ...props
}) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(currentImage);
  };
  return (
    <img src={fallback || src} alt={alt} {...props} onError={handleError} />
  );
}

export default Image;
