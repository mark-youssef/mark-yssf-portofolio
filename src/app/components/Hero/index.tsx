import React from "react";

import Image, { ImageProps } from "next/image";
import TiltingBox from "../TiltingBox";

type HeroProps = {
  imageSrc: ImageProps["src"];
  imageAlt: string;
  children: React.ReactNode;
};

const Hero: React.FC<HeroProps> = ({ imageSrc, imageAlt, children }) => {
  return (
    <section className="max-w-7xl w-full flex px-4 pt-4 pb-6 lg:p-24 flex-col lg:flex-row align-center justify-center lg:max-h-screen">
      <div className="lg:flex-1">
        <TiltingBox className="lg:flex max-h-full">
          <Image
            className="border border-white rounded-2xl object-cover object-center-1/3 lg:object-center w-full h-96 lg:h-full max-h-full"
            src={imageSrc}
            alt={imageAlt}
            priority
          />
        </TiltingBox>
      </div>
      <div className="flex-1 mt-4 lg:pl-10 flex flex-col">{children}</div>
    </section>
  );
};

export default Hero;
