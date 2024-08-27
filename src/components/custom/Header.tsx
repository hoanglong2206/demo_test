"use client";
import { Button } from "@/components/ui/button";
import { Logo, MenuHeader, ModeToggle } from "@/components";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full max-w-[1920px] z-9 shadow-sm mx-auto xl:px-20 md:px-10 px-4 py-6 bg-slate-900 dark:bg-slate-50">
      <div className="flex items-center justify-between gap-x-8">
        <div className="flex gap-x-4 items-center">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            size="icon"
            variant={"ghost"}
            className="flex xl:hidden text-muted"
          >
            <Menu className="w-6 h-6" />
          </Button>
          <Logo />
        </div>
        <div className="xl:flex items-center gap-x-3 hidden">
          <MenuHeader />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center gap-x-2">
            <Button
              variant="ghost"
              className="text-muted"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              variant="ghost"
              className="text-muted"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
