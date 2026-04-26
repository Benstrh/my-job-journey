"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const buttonStlyeClasses = "relative w-full";

export default function ButtonTracking({ label }: { label: string }) {
  const [isClick, setIsClick] = useState(false);

  function handleClick() {
    setIsClick((c) => !c);
  }

  return (
    <Button
      variant="primary"
      size={"none"}
      onClick={handleClick}
      className={`${isClick ? "bg-black text-white" : ""}`}
    >
      {label}
    </Button>
  );
}
