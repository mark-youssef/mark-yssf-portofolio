import React from "react";

import Image from "next/image";
import { Technology } from "@/app/const";

type TechIconProps = Technology;

const TechIcon: React.FC<TechIconProps> = ({
  src,
  name,
  srcType = "image",
}) => {
  let icon;
  switch (srcType) {
    case "emoji":
      icon = <p className="text-5xl h-16">{src as string}</p>;
      break;
    case "image":
    default:
      icon = (
        <Image
          className="mb-2 mx-auto"
          src={src}
          alt={name}
          width={64}
          height={64}
        />
      );
      break;
  }

  return (
    <div className="p-2 text-center transition-transform duration-500 ease-out hover:scale-125">
      {icon}
      <p>{name}</p>
    </div>
  );
};

export default TechIcon;
