import { Button } from "@/components/ui/button";
import {
  HoverNotification,
  DropdownUser,
  ModeToggle,
  HoverMessage,
  SearchBar,
} from "@/components";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
interface HeaderDashboardProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDashboard = ({
  sidebarOpen,
  setSidebarOpen,
}: HeaderDashboardProps) => {
  return (
    <header className="sticky top-0 z-99 flex w-full bg-background shadow-sm shadow-slate-200 dark:shadow-slate-800">
      <div className="flex flex-grow items-center justify-between py-3 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <div className="flex lg:hidden gap-x-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              size="icon"
              variant={"ghost"}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <SearchBar />
        <div className="flex items-center gap-3 h-10">
          <ul className="flex items-center gap-2">
            <ModeToggle />
            <HoverMessage />
            <HoverNotification />
          </ul>
          <Separator orientation="vertical" />
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
