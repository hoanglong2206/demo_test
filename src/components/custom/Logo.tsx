import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  isDark = false,
  isVisible = false,
}: {
  isDark?: boolean;
  isVisible?: boolean;
}) => {
  return (
    <Link href={"/"}>
      <div
        className={`hover:opacity-75 transition items-center gap-x-2 justify-center ${
          isVisible ? "flex" : "hidden lg:flex"
        }`}
      >
        <div
          className={`rounded-full  p-1 ${
            isDark
              ? "bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900"
              : "bg-slate-100 dark:bg-slate-900"
          }`}
        >
          <Zap className="w-7 h-7" />
        </div>
        <p
          className={`pb-1 text-lg font-bold  ${
            isDark
              ? "text-slate-900 dark:text-slate-100"
              : "text-slate-50 dark:text-slate-900 "
          }`}
        >
          GoStock
        </p>
      </div>
    </Link>
  );
};

export default Logo;
