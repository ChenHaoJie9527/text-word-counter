import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

interface Props {
  children: React.ReactNode;
}
export default function ThemeProvider({ children }: Props) {
  return <Theme>{children}</Theme>;
}
