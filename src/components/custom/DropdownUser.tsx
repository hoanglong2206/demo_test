"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NotebookTabs, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const DropdownUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center gap-4 outline-none">
        <span className="hidden text-right lg:block">
          <span className="block text-base font-medium text-black dark:text-white">
            John Doe
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <Avatar>
          <AvatarImage
            src={
              "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            }
            alt="Avatar"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-999 w-52" align="end">
        <DropdownMenuLabel className="text-base">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem>
            <Link href="/profile" className="flex items-center gap-2.5">
              <User2 className="w-5 h-5" />
              <span className="text-base font-medium text-black dark:text-white">
                Profile
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#" className="flex items-center gap-2.5">
              <NotebookTabs className="w-5 h-5" />
              <span className="text-base font-medium text-black dark:text-white">
                Contacts
              </span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-base font-medium text-black dark:text-white">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
