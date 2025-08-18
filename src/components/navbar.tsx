import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,

} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarComponents() {
  return (
    <Navbar  rounded className="fixed top-0 z-50 w-full bg-white px-2 py-2.5 dark:bg-gray-800">
      <NavbarBrand as={Link} href="#">
        <Image
          src={"/logo.png"}
          width={50}
          height={50}
          alt="neuranews logo"
          priority
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Neuranews
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#home" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#news">
          Ai News
        </NavbarLink>

        <NavbarLink href="#footer">About</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
