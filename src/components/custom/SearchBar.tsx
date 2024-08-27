"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <form
      className={
        "relative hidden md:flex lg:hidden xl:flex min-w-[550px] max-w-[700px] mx-auto items-center"
      }
    >
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Press '⌘' to search for various stocks"
        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 pl-8"
      />
    </form>
  );
};

export default SearchBar;
