"use client";

import { ReactNode, useState } from "react";
import { Button } from "./ui/button";

const buttonStlyeClasses = "relative w-full";

export default function ButtonTracking({ children }: { children: ReactNode }) {
  const [isClick, setIsClick] = useState(false);

  function handleClick() {
    setIsClick((c) => !c);
  }

  return (
    <Button
      variant={`${isClick ? "clicked" : "primary"}`}
      size={"none"}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
