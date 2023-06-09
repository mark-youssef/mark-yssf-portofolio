import React from "react";

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="max-w-7xl w-full px-4 lg:px-24 pb-24">
      {children}
    </section>
  );
};

export default Section;
