import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Tag = ({ children }: Props) => {
  return (
    <div className="bg-blue-400 text-blue-900 px-2 py-1 rounded font-medium">
      {children}
    </div>
  );
};

export default Tag;
