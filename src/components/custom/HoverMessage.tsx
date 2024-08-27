"use client";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

const HoverMessage = () => {
  return (
    <HoverCard>
      <HoverCardTrigger
        asChild
        className="relative flex h-9 w-9 items-center justify-center rounded-full"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <span className="absolute top-0.5 -right-0 z-1 h-2 w-2 rounded-full bg-[#DC3545]">
            <span className="absolute right-0 -z-1 inline-flex h-full w-full animate-ping rounded-full bg-[#DC3545] opacity-75"></span>
          </span>
          <MessageCircleMore className="h-5 w-5" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="z-999 w-[280px]">
        <Link className="flex gap-2.5" href="/messages">
          <div className="h-[46px] w-[46px] rounded-full border border-gray-200 flex items-center justify-center">
            <img
              src={
                "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              }
              alt="User"
            />
          </div>

          <div>
            <h6 className="text-sm font-medium text-black dark:text-white">
              Mariya Desoja
            </h6>
            <p className="text-sm">I like your confidence 💪</p>
            <p className="text-xs">2min ago</p>
          </div>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverMessage;
