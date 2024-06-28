import React from "react";
import Background from "./base/Background";
import Title from "./base/Title";

export default function Header() {
  return (
    <header className="flex-[10%]">
      <Background />
      <Title>
        Text <span className=" font-light">Word Counter</span>
      </Title>
    </header>
  );
}
