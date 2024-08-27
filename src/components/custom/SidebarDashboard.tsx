import { useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Home,
  SquareActivity,
  LayoutDashboard,
  Newspaper,
  Phone,
  Settings,
  UsersRound,
  Wallet,
  ArrowUp,
  EyeOff,
} from "lucide-react";
import { Logo } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "../ui/input";
interface SidebarDashboardProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const SidebarDashboard = ({
  sidebarOpen,
  setSidebarOpen,
}: SidebarDashboardProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1024) setSidebarOpen(false);
  }, [setSidebarOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
      className={`absolute shadow-md shadow-slate-200 dark:shadow-slate-800 left-0 top-0 z-999 bg-background flex h-screen w-80 flex-col  overflow-y-auto no-scrollbar duration-150 ease-in-out lg:static lg:translate-x-0 py-4 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-4 lg:px-6 py-5 lg:py-6">
        <Logo isDark isVisible />

        <Button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          size="icon"
          variant="ghost"
          className="flex items-center justify-center lg:hidden"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="w-full rounded-lg px-5 lg:px-8 py-4">
        <div className="relative">
          <img
            src={
              "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            }
            alt={"profile"}
            className="w-full h-24 rounded-xl"
          />
          <div className=" absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl" />
          <div className=" absolute inset-0 flex items-center justify-between gap-y-4 px-4">
            <div>
              <h1 className="text-sm font-medium text-muted dark:text-muted-foreground">
                Total Investment
              </h1>
              <div className="relative w-3/4 cursor-pointer">
                <Input
                  type="text"
                  readOnly
                  className="text-muted dark:text-muted-foreground text-xl border-none bg-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                  value={"$5380,90"}
                />
                <EyeOff className="absolute right-0 top-3 h-3 w-3 text-muted dark:text-muted-foreground" />
              </div>
            </div>
            <div className="flex items-center justify-center text-green-500">
              <span>+10%</span>
              <ArrowUp className="w-4 h-4 " />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex-col duration-300 ease-linear">
        <nav className="py-4 px-3 lg:px-5 space-y-2">
          <Link
            href="/"
            className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out`}
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out  ${
              pathname === "/dashboard" && "bg-neutral-500/10"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/wallet"
            className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out  ${
              pathname.includes("wallet") && "bg-neutral-500/10"
            }`}
          >
            <Wallet className="w-5 h-5" />
            Wallet
          </Link>
          <Link
            href="/dashboard/news"
            className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out  ${
              pathname.includes("news") && "bg-neutral-500/10"
            }`}
          >
            <Newspaper className="w-5 h-5" />
            News
          </Link>
          <Accordion
            type="single"
            collapsible
            className="h-full flex justify-between flex-col"
          >
            <AccordionItem value="sidebar" className="border-none">
              <AccordionTrigger className="flex items-center rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out transition text-start no-underline hover:no-underline">
                <div className="flex items-center gap-2.5">
                  <SquareActivity className="w-5 h-5" />
                  Stock & fund
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <Link
                  href={"#"}
                  className={`flex items-center gap-2.5 rounded-sm py-2 px-12 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out `}
                >
                  Stock
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-2.5 rounded-sm py-2 px-12 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out`}
                >
                  Cryptocurrency
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-2.5 rounded-sm py-2 px-12 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out`}
                >
                  Mutual Fund
                </Link>
                <Link
                  href="#"
                  className={`flex items-center gap-2.5 rounded-sm py-2 px-12 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out`}
                >
                  Gold
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>
      </div>

      <Separator className="w-3/4 mx-auto" />
      <div className="py-4 px-3 lg:px-5 space-y-2">
        <Link
          href="/dashboard/our-community"
          className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out  ${
            pathname.includes("our-community") && "bg-neutral-500/10"
          }`}
        >
          <UsersRound className="w-5 h-5" />
          Our Community
        </Link>
        <Link
          href="/dashboard/settings"
          className={`flex items-center justify-between rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out  ${
            pathname.includes("settings") && "bg-neutral-500/10"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5" />
            Settings
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold bg-red-500 text-muted rounded-full px-2 py-1">
              2
            </span>
          </div>
        </Link>
        <Link
          href="/dashboard/contact-us"
          className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold hover:bg-neutral-500/10 duration-75 ease-in-out  ${
            pathname.includes("contact-us") && "bg-neutral-500/10"
          }`}
        >
          <Phone className="w-5 h-5" />
          Contact Us
        </Link>
      </div>
    </aside>
  );
};

export default SidebarDashboard;
