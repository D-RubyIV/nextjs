import React from "react";

const Container = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto w-full">
      {children}
    </div>
  );
};

export default Container;
