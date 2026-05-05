"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const styleClasses =
  "transition-colors duration-100 hover:bg-black hover:text-white";

export default function FilterNavButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="primary" size={"none"}>
            Date
          </Button>
        }
      />
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem className={styleClasses}>
            <Button className="relative w-full">
              <Link href={"/a"} className="w-full">
                Newest
              </Link>
            </Button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem className={styleClasses}>Oldest</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
