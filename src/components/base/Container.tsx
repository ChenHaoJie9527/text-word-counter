import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Container({ children }: Props) {
  return (
    <main className="min-w-[1080px] min-h-[520px] bg-[#ffffff] rounded-md shadow-xl flex mt-[55px] overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </main>
  );
}
