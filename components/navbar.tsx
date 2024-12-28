'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Avatar,
  Link,
  Button,
} from "@nextui-org/react";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => setIsMenuOpen((prev) => !prev)

  return (
    <NextUINavbar className="flex" isMenuOpen={isMenuOpen} // state value
      onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarBrand>
          <Avatar src="/logo.jpeg" />
          <p className="px-2 font-bold text-inherit">DESIDESIRE</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar links for large screens */}
      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem>
          <NextLink
            className={`${pathname === "/" ? "text-primary" : ""}`}
            href='/'
          >
            Home
          </NextLink>
        </NavbarItem>
        <SignedIn>
          <NavbarItem>
            <NextLink
              className={`${pathname === "/items" ? "text-primary" : ""}`}
              color="foreground"
              href='/items'
            >
              Items
            </NextLink>
          </NavbarItem>
        </SignedIn>
        <NavbarItem>
          <NextLink
            className={`${pathname === "/about" ? "text-primary" : ""}`}
            color="foreground"
            href='/about'
          >
            About
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar content on the right */}
      <NavbarContent justify="end">
        {/* Theme Switcher */}
        <NavbarItem className="hidden lg:block">
          <ThemeSwitch />
        </NavbarItem>

        {/* Sign in and sign up buttons */}
        <SignedOut>
          <NavbarItem className="hidden lg:flex">
            <SignInButton />
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat" className="hidden lg:flex">
              <SignUpButton />
            </Button>
          </NavbarItem>
        </SignedOut>

        {/* User button */}
        <NavbarItem>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </NavbarItem>
        {/* <NavbarItem > */}
          <NavbarMenuToggle className="lg:hidden" />
        {/* </NavbarItem> */}
      </NavbarContent>

      {/* Mobile menu links */}
      <NavbarMenu>
        <div className="flex flex-col gap-2 items-center mx-4 mt-2">
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${pathname === "/" ? "text-primary" : ""}`}
              color="foreground"
              href='/'
              onPress={handleMenuToggle}
            >
              Home
            </Link>
          </NavbarItem>
          <SignedIn>
            <NavbarItem>
              <Link
                className={`${pathname === "/items" ? "text-primary" : ""}`}
                color="foreground"
                href='/items'
                onPress={handleMenuToggle}
              >
                Items
              </Link>
            </NavbarItem>
          </SignedIn>
          <NavbarItem>
            <Link
              className={`${pathname === "/about" ? "text-primary" : ""}`}
              color="foreground"
              href='/about'
              onPress={handleMenuToggle}
            >
              About
            </Link>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
