"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="w-full absolute flex min-h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8 space-y-4 font-semibold">
      <p>Something went wrong</p>
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
