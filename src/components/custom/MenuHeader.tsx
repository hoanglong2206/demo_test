"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Development",
    href: "/service/web-development",
    description:
      "We build web applications that are scalable, secure, and easy to maintain.",
  },
  {
    title: "Mobile Development",
    href: "/service/mobile-development",
    description:
      "We build mobile applications that are fast, reliable, and easy to use.",
  },
  {
    title: "UI/UX Design",
    href: "/service/ui-ux-design",
    description:
      "We design user interfaces that are intuitive, accessible, and visually appealing.",
  },
  {
    title: "Quality Assurance",
    href: "/service/quality-assurance",
    description:
      "We test software to ensure that it meets the highest standards of quality.",
  },
];

export default function MenuHeader() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`inline-flex h-10 w-max items-center justify-center rounded-md  text-slate-50 dark:text-slate-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-950 dark:hover:bg-slate-200 ${
                pathname === "/"
                  ? "bg-slate-950 dark:bg-slate-200 "
                  : "bg-slate-900 dark:bg-slate-50"
              }`}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 hover:bg-slate-950 dark:hover:bg-slate-200 focus:bg-transparent focus:text-slate-50">
            Service
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink
              className={`inline-flex h-10 w-max items-center justify-center rounded-md text-slate-50 dark:text-slate-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-950 dark:hover:bg-slate-200 ${
                pathname === "/products"
                  ? "bg-slate-950 dark:bg-slate-200"
                  : "bg-slate-900 dark:bg-slate-50"
              }`}
            >
              Products
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink
              className={`inline-flex h-10 w-max items-center justify-center rounded-md text-slate-50 dark:text-slate-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-950 dark:hover:bg-slate-200 ${
                pathname === "/about-us"
                  ? "bg-slate-950 dark:bg-slate-200"
                  : "bg-slate-900 dark:bg-slate-50"
              }`}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
