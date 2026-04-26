"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

interface TrackingButtonType {
  label: string;
  children: ReactNode;
}

const styleClasses =
  "transition-colors duration-100 hover:bg-black hover:text-white";
const buttonStlyeClasses = "relative w-full";

export default function TrackingNavigationMenu() {
  return (
    <>
      <TrackingButton label="Date">
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              Newest
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              Oldest
            </Link>
          </Button>
        </DropdownMenuItem>
      </TrackingButton>

      <TrackingButton label="Platform">
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              LinkedIn
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              Job Street
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              Glints
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              Others
            </Link>
          </Button>
        </DropdownMenuItem>
      </TrackingButton>

      <TrackingButton label="Status">
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              Applied
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              In Progress
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={styleClasses}>
          <Button className={buttonStlyeClasses}>
            <Link href={"/a"} className="w-full text-left">
              Rejected
            </Link>
          </Button>
        </DropdownMenuItem>
      </TrackingButton>
    </>
  );
}

function TrackingButton({ label, children }: TrackingButtonType) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="primary" size={"none"}>
            {label}
          </Button>
        }
      />
      <DropdownMenuContent
        className="w-40 bg-primary-50/30 backdrop-blur-sm"
        align="start"
      >
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
