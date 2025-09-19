"use client";
import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  label: string;
}

function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  return (
    <NavbarItem as={Link} href={href} isActive={pathname === href}>
      {label}
    </NavbarItem>
  );
}

export default NavLink;
