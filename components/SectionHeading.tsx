import React from "react";
type SectionHeadingProps = {
  children: React.ReactNode;
};
const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-medium mb-8 capitalize text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
