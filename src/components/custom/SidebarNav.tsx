"use client";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

interface SidebarNavProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarNav = ({ sidebarOpen, setSidebarOpen }: SidebarNavProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const handleResize = () => {
    if (window.innerWidth > 1280) {
      // Adjust this value as needed for your breakpoint
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`fixed shadow-lg left-0 top-0 z-999 bg-slate-900 dark:bg-slate-50 flex h-screen w-72 flex-col overflow-y-hidden duration-150 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5">
        <Logo isVisible />

        <Button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          size="icon"
          variant="ghost"
          className="flex items-center justify-center xl:hidden text-muted"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="no-scrollbar flex-1 flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="py-4 px-3 lg:px-5 space-y-1">
          <Link
            href={"/"}
            passHref
            className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  text-slate-50 dark:text-slate-900 hover:bg-slate-950 dark:hover:bg-slate-200 duration-75 ease-in-out ${
              pathname === "/"
                ? "bg-slate-950 dark:bg-slate-200 "
                : "bg-slate-900 dark:bg-slate-50"
            }`}
          >
            Home
          </Link>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sidebar" className="border-none">
              <AccordionTrigger className="py-2 px-4 rounded-md bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 hover:bg-slate-950 dark:hover:bg-slate-200 transition text-start no-underline hover:no-underline">
                Service
              </AccordionTrigger>
              <AccordionContent className="pb-0 space-y-2">
                <Link
                  href={"#"}
                  className={`flex items-center rounded-sm py-2 px-6 font-medium bg-slate-900 dark:bg-slate-50 hover:bg-slate-950 dark:hover:bg-slate-200 text-slate-50 dark:text-slate-900 duration-75 ease-in-out `}
                >
                  Web Development
                </Link>
                <Link
                  href="#"
                  className={`flex items-center rounded-sm py-2 px-6 font-medium bg-slate-900 dark:bg-slate-50 hover:bg-slate-950 dark:hover:bg-slate-200 text-slate-50 dark:text-slate-900 duration-75 ease-in-out`}
                >
                  Mobile Development
                </Link>
                <Link
                  href="#"
                  className={`flex items-center rounded-sm py-2 px-6 font-medium bg-slate-900 dark:bg-slate-50 hover:bg-slate-950 dark:hover:bg-slate-200 text-slate-50 dark:text-slate-900 duration-75 ease-in-out`}
                >
                  UI/UX Design
                </Link>
                <Link
                  href="#"
                  className={`flex items-center rounded-sm py-2 px-6 font-medium bg-slate-900 dark:bg-slate-50 hover:bg-slate-950 dark:hover:bg-slate-200 text-slate-50 dark:text-slate-900 duration-75 ease-in-out`}
                >
                  Quality Assurance
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href={"/products"}
            passHref
            className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 dark:text-slate-900 duration-75 ease-in-out hover:bg-slate-950 dark:hover:bg-slate-200  ${
              pathname === "/products"
                ? "bg-slate-950 dark:bg-slate-200 "
                : "bg-slate-900 dark:bg-slate-50"
            }`}
          >
            Products
          </Link>
          <Link
            href={"/about-us"}
            passHref
            className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 dark:text-slate-900 duration-75 ease-in-out hover:bg-slate-950 dark:hover:bg-slate-200  ${
              pathname === "/about-us"
                ? "bg-slate-950 dark:bg-slate-200 "
                : "bg-slate-900 dark:bg-slate-50"
            }`}
          >
            About Us
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
