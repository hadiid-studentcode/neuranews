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
    <Navbar  rounded>
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
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/test">
          Ai News
        </NavbarLink>

        <NavbarLink href="#">About</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
