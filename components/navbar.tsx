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
        <NavbarItem className="lg:hidden">
          <NavbarMenuToggle />
        </NavbarItem>
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


// "use client";
// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { SignInButton, SignedIn, SignedOut, UserButton, SignUpButton } from "@clerk/nextjs";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
// import {
//   TwitterIcon,
//   GithubIcon,
//   DiscordIcon,
//   HeartFilledIcon,
//   SearchIcon,
//   Logo,
// } from "@/components/icons";
// import { useState } from "react";

// export const Navbar = () => {
//   const [iseMenuOpen, setIsMenuOpen] = useState<boolean>(false);

//   const handleLinkClick = (): void => {
//     setIsMenuOpen(false);
//   }

//   return (
//     <NextUINavbar maxWidth="xl" position="sticky">
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex gap-2 justify-start items-center" href="/">
//             <Logo />
//             <p className="font-bold text-inherit">DESIDESIRE</p>
//           </NextLink>
//         </NavbarBrand>
//         <ul className="hidden gap-4 justify-start ml-2 lg:flex">
//           <NavbarItem>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href="/"
//               >
//                 Home
//             </NextLink>
//           </NavbarItem>
//           <NavbarItem>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href="/about"
//               >
//                 About
//             </NextLink>
//           </NavbarItem>
//         </ul>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <SignedOut>
//           <NavbarItem className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}>
//             <SignInButton />
//           </NavbarItem>

//           <NavbarItem className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}>
//             <SignUpButton />
//           </NavbarItem>
//         </SignedOut>

//         <SignedIn>
//           <NavbarItem>
//             <NextLink
//                   className={clsx(
//                     linkStyles({ color: "foreground" }),
//                     "data-[active=true]:text-primary data-[active=true]:font-medium",
//                   )}
//                   color="foreground"
//                   href="/about"
//                 >
//                   My Items
//               </NextLink>
//           </NavbarItem>
//           <NavbarItem className="flex">
//             <UserButton />
//           </NavbarItem>
//         </SignedIn>
//         <NavbarItem className="hidden gap-2 sm:flex">
//           <ThemeSwitch />
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="flex flex-col gap-2 items-center mt-2">
//           <NavbarMenuItem>
//             <ThemeSwitch />
//           </NavbarMenuItem>
//           <NavbarMenuItem>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href="/"
//                 onClick={handleLinkClick}
//               >
//                 Home
//             </NextLink>
//           </NavbarMenuItem>

//           <NavbarMenuItem>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href="/about"
//                 onClick={handleLinkClick}
//               >
//                 About
//             </NextLink>
//           </NavbarMenuItem>

//           <SignedOut>
//             <NavbarMenuItem className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}>
//               <SignInButton />
//             </NavbarMenuItem>

//             <NavbarMenuItem className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}>
//               <SignUpButton />
//             </NavbarMenuItem>
//           </SignedOut>

//           <SignedIn>
//             <NavbarMenuItem>
//               <NextLink
//                   className={clsx(
//                     linkStyles({ color: "foreground" }),
//                     "data-[active=true]:text-primary data-[active=true]:font-medium",
//                   )}
//                   color="foreground"
//                   href="/about"
//                   onClick={handleLinkClick}
//                 >
//                   My Items
//               </NextLink>
//             </NavbarMenuItem>
//             <NavbarMenuItem>
//               <UserButton />
//             </NavbarMenuItem>
//           </SignedIn>
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };
