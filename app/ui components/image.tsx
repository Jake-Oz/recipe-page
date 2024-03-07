import React from "react";

import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const RecipeImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="sm:rounded-lg bg-neutral-eggshell overflow-hidden">
      <Image src={src} alt={alt} height={224} width={490} />
    </div>
  );
};

export default RecipeImage;
