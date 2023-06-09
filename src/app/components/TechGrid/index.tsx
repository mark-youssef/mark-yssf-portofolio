import React from "react";

import { Technology } from "@/app/const";
import TechIcon from "../TechIcon";

type TechGridProps = {
  title: string;
  items: Technology[];
};

const TechGrid: React.FC<TechGridProps> = ({ title, items }) => {
  return (
    <>
      <h3 className="text-2xl mb-4">{title}</h3>
      <ul className="grid grid-cols-3 items-end md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
        {items.map((item) => (
          <li key={item.name}>
            <TechIcon name={item.name} src={item.src} srcType={item.srcType} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechGrid;
