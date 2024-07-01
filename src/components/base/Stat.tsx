import React from "react";

interface Props {
  type: string;
  counter?: number;
  className?: string;
}
export default function Stat({ type, counter, className }: Props) {
  return (
    <div key={type} className={`flex items-center justify-center border-b-[1px] flex-col font-bold text-[#5c6b73] ${className}`}>
      <span className=" text-[30px]">{counter}</span>
      <span className=" uppercase tracking-[1px] opacity-70 xl:text-[14px] md:text-[14px] sm:text-[12px]">
        {type}
      </span>
    </div>
  );
}
