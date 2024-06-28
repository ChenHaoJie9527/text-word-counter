import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Title({ children }: Props) {
  return (
    <h1 className="text-[65px] tracking-[5px] uppercase mt-[35px] text-center text-[#fff]">
      {children}
    </h1>
  );
}
