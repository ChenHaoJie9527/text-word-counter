import React from "react";
import Container from "./base/Container";

interface Props {
  children: React.ReactNode;
}
export default function Main({ children }: Props) {
  return <Container>{children}</Container>;
}
