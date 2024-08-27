"use client";
import Link from "next/link";
import { Logo } from "@/components";

const Footer = () => {
  const SITEMAP = [
    {
      title: "Platform",
      links: [
        "Analytics",
        "Planning",
        "Collaboration",
        "Data Management",
        "Integrations",
        "Security",
      ],
    },
    {
      title: "Resources",
      links: [
        "Customers",
        "Strategic Finance",
        "Ebook & Guides",
        "Webinars & Events",
        "Podcast & Video",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Financial",
        "Investors & CEOs",
        "Revenue Operations",
        "Sales & Marketing",
        "Human Resources",
      ],
    },
    {
      title: "Resources",
      links: [
        "Customers",
        "Strategic Finance",
        "Ebook & Guides",
        "Webinars & Events",
        "Podcast & Video",
        "Matrices Catalog",
      ],
    },
  ];
  return (
    <footer className="relative w-full bg-slate-50 dark:bg-slate-900">
      <div className="w-full mx-auto">
        <div className="grid sm:gap-x-16 xl:grid-cols-5 w-full gap-y-8 mx-auto grid-cols-1 py-14 px-16 lg:px-32 border-t ">
          <div className="w-full flex flex-col gap-y-4 items-center lg:items-start col-span-1">
            <Logo isDark isVisible />
            <p className=" text-center sm:text-left">
              Technology Park 8-14 Marie Curie Street 080842 Barcelona
            </p>
            <p className=" text-center sm:text-left underline mt-4">
              thlong2206@gmail.com
            </p>
          </div>
          <div className="xl:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-16 gap-y-8">
            {SITEMAP.map(({ title, links }) => (
              <FooterList key={`${title}-${links.join("-")}`} title={title}>
                {links.map((link) => (
                  <Link
                    key={`${title}-${link}`}
                    href="/"
                    className="hover:text-slate-500 font-medium  tracking-wider"
                  >
                    {link}
                  </Link>
                ))}
              </FooterList>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center py-4 px-16 bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900">
          <p>&copy; {new Date().getFullYear()} COPYRIGHT - GOSTOCK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface FooterListProps {
  title: string;
  children: React.ReactNode;
}

const FooterList = ({ title, children }: FooterListProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center sm:items-start ">
      <h3 className="text-lg font-semibold uppercase tracking-widest mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
};

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}
