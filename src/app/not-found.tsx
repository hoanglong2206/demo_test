import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="w-full absolute flex min-h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-center space-y-4 font-semibold">
        <h1 className="text-4xl">404</h1>
        <p>We couldn&apos;t find the page you were looking for.</p>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
