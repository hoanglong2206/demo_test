"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CircleCheckBig, Sparkles } from "lucide-react";
import React from "react";
import dashboardImg from "@/assets/dashboard.png";
import chartImg from "@/assets/chart.png";
import watchListImg from "@/assets/watchList.png";
import tableStock from "@/assets/tableStock.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Icons } from "@/lib/icon";
import { useRouter } from "next/navigation";

const brands: any[] = [
  {
    name: "Visa",
    image:
      "https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-69-512.png",
  },
  {
    name: "Mastercard",
    image:
      "https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Mastercard-512.png",
  },
  {
    name: "Bank of America",
    image:
      "https://img.icons8.com/?size=100&id=QxCQEYp6HT8Z&format=png&color=000000",
  },
  {
    name: "BCA",
    image:
      "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/BCA-512.png",
  },
  {
    name: "Mandiri",
    image:
      "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/Mandiri-512.png",
  },
];

const Home = () => {
  const router = useRouter();
  return (
    <div className="w-full space-y-8 pb-10">
      <div className="relative">
        <img
          src={
            "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={"banner"}
          className="object-cover w-full h-[400px] md:h-[700px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center lg:w-3/4 space-y-4 mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              Easily invest in stocks and crypto in one{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                GoStock platform
              </span>
            </h1>
            <div className="text-sm md:text-base lg:text-lg w-4/5 text-slate-400 lg:w-3/5 mx-auto">
              Get all the convenience of investing in stocks and
              cryptocurrencies in GoStock platform.Now you can use this in
              desktop version
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <Button
                onClick={() => router.push("/dashboard")}
                variant={"ghost"}
                className="h-10 md:h-12 px-4 md:px-6 border border-white md:text-lg dark:text-slate-400 font-semibold text-muted"
              >
                How it works
              </Button>
              <Button
                variant={"outline"}
                className="h-10 md:h-12 px-4 md:px-6 md:text-lg font-semibold"
              >
                Get app now
                <ArrowDownToLine className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto min-h-[100px] md:min-h-[200px] xl:min-h-[400px] flex items-center justify-center">
        <div
          onClick={() => router.push("/dashboard")}
          className="absolute cursor-pointer -top-16 md:-top-36 right-6 md:right-4 xl:right-12 flex items-center justify-center rounded-lg "
        >
          <Image
            src={dashboardImg}
            alt="dashboard"
            className="w-4/5 rounded-lg shadow-md"
          />
        </div>
      </div>
      <Carousel
        className="w-full bg-slate-50 dark:bg-slate-950"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {brands.map((brand, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 cursor-pointer bg-transparent flex items-center justify-center dark:shadow-md "
            >
              <div className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 p-1">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="object-contain h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid lg:grid-cols-5 grid-cols-1 py-8 gap-y-10">
        <div className="flex lg:col-span-3 col-span-1 items-center justify-center rounded-3xl">
          <Image
            src={watchListImg}
            alt="chart"
            className="w-3/5 xl:w-1/2 rounded-3xl shadow-md"
          />
        </div>
        <div className="flex flex-col gap-y-8 justify-center px-20 lg:px-4 col-span-1 lg:col-span-2">
          <div className="text-[28px] md:text-4xl xl:text-5xl font-bold tracking-wide text-center lg:text-start">
            Easily monitor stock movements on{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
              GoStock
            </span>
          </div>
          <div className="text-muted-foreground text-lg lg:w-3/5">
            Monitor the stocks you are after in real time and of course easily
            and accurately
          </div>
          <div className="space-y-4 text-muted-foreground ">
            <div className="flex text-sm md:text-base items-center justify-start gap-x-2">
              <CircleCheckBig className="w-6 h-6" />
              <div>Monitor stocks easily and accurately</div>
            </div>
            <div className="flex text-sm md:text-base items-center justify-start gap-x-2">
              <CircleCheckBig className="w-6 h-6" />
              <div>Get regular reports on the shares you own</div>
            </div>
            <Button className="h-12 px-8 rounded-full text-lg">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 py-8 lg:px-20 gap-y-10">
        <div className="flex flex-col gap-y-8 items-center justify-center px-10">
          <Button
            variant={"outline"}
            className="h-12 px-10 rounded-full text-sm lg:text-lg uppercase tracking-wider md:w-1/2 lg:w-3/4 shadow-xl"
          >
            Get a lot of investment easy
          </Button>
          <div className="xl:text-5xl lg:text-4xl font-bold tracking-wide text-center lg:text-start text-3xl">
            A wide variety of stocks from all over the world
          </div>
          <div className="flex items-center justify-center gap-x-4 ">
            <div className="flex items-center gap-x-3 ">
              <Sparkles className="w-8 lg:w-12 h-8 lg:h-12 -mt-16 xl:-mt-10 md:-mt-10 lg:-mt-14" />
              <div className="text-muted-foreground text-sm">
                Starting from local stocks, US stocks you can find and you can
                buy here
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <Sparkles className="w-8 lg:w-12 h-8 lg:h-12 -mt-16 xl:-mt-10 md:-mt-10 lg:-mt-14" />
              <div className="text-muted-foreground text-sm">
                You can buy international stocks easily and quickly only on
                GoStock
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-3xl">
          <Image
            src={chartImg}
            alt="chart"
            className="w-3/5 rounded-3xl shadow-md"
          />
        </div>
      </div>
      <div className="space-y-8 px-10 xl:px-28">
        <div className="md:text-4xl xl:text-5xl text-[28px] text-center lg:text-start tracking-wide xl:w-1/2 font-semibold lg:ml-14">
          Find the most suitable stock for you to buy now
        </div>
        <div className="flex items-center justify-center rounded-lg shadow-md border">
          <Image
            src={tableStock}
            alt="dashboard"
            className="w-4/5 rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 items-center justify-center px-4 xl:px-0 relative py-12">
        <Button
          variant={"outline"}
          className="h-12 px-8 rounded-full text-lg uppercase tracking-wider xl:w-1/5 shadow-xl"
        >
          Get the app for free
        </Button>
        <div className="text-3xl xl:text-5xl font-semibold tracking-wide md:w-2/3 xl:w-1/2 text-center leading-tight">
          Download the application and feel the ease of investing
        </div>
        <div className="text-muted-foreground text-base w-2/3 xl:w-2/5 font-medium text-center leading-snug">
          You can now use the GoStock application in the mobile version. You can
          get the app in the Appstore or Playstore.Download now and feel the
          convenience
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <Button
            variant={"outline"}
            className="border border-accent-foreground flex items-center justify-center gap-x-2 h-12 xl:h-14 px-4"
          >
            <Icons.Apple className="w-6 xl:w-10 h-6 xl:h-10" />
            <div className="leading-3 text-start">
              <div className="text-[10px]">Download on the</div>
              <div className="text-xl font-semibold ">App Store</div>
            </div>
          </Button>
          <Button
            variant={"outline"}
            className="border border-accent-foreground flex items-center justify-center gap-x-2 h-12 xl:h-14 px-4"
          >
            <Icons.Playstore className="w-6 xl:w-10 h-6 xl:h-10" />
            <div className="leading-3 text-start">
              <div className="text-[10px] uppercase">Get it on</div>
              <div className="text-xl font-semibold ">Google Play</div>
            </div>
          </Button>
        </div>
        <div className="flex absolute items-center top-20 xl:top-16 right-3 md:right-20 xl:right-40 justify-center w-12 h-12 md:w-16 md:h-16 xl:w-24 xl:h-24 bg-white rounded-full">
          <img
            src={
              "https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
            }
            alt={"apple"}
            className="object-contain h-full w-full hover:scale-109 shadow-xl rounded-full transition-transform duration-300 ease-in-out p-1 md:p-2 xl:p-4"
          />
        </div>
        <div className="flex absolute items-center top-4 left-3 md:left-20 xl:left-60 justify-center w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 bg-white rounded-full">
          <img
            src={
              "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
            }
            alt={"facebook"}
            className="object-contain h-full w-full hover:scale-109 shadow-xl rounded-full transition-transform duration-300 ease-in-out p-1 xl:p-2"
          />
        </div>
        <div className="flex absolute items-center top-52 xl:top-40 md:top-44 left-1 md:left-16 xl:left-80 justify-center w-12 h-12 bg-white rounded-full">
          <img
            src={
              "https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            }
            alt={"google"}
            className="object-contain h-full w-full hover:scale-109 shadow-xl rounded-full transition-transform duration-300 ease-in-out p-1"
          />
        </div>
        <div className="flex absolute items-center top-60 xl:top-48 right-6 xl:right-80 justify-center w-12 h-12 bg-white rounded-full">
          <img
            src={
              "https://img.icons8.com/?size=100&id=G9XXzb9XaEKX&format=png&color=000000"
            }
            alt={"spotify"}
            className="object-contain h-full w-full hover:scale-109 shadow-xl rounded-full transition-transform duration-300 ease-in-out p-1"
          />
        </div>
        <div className="flex absolute items-center top-80 xl:top-60 left-8 md:left-24  xl:left-48 justify-center w-12 h-12 md:w-16 md:h-16 xl:w-28 xl:h-28 bg-white rounded-full">
          <img
            src={
              "https://img.icons8.com/?size=100&id=103424&format=png&color=000000"
            }
            alt={"airbnb"}
            className="object-contain h-full w-full hover:scale-109 shadow-xl rounded-full transition-transform duration-300 ease-in-out p-1 md:p-2 xl:p-4"
          />
        </div>
        <div className="flex absolute items-center top-[340px] xl:top-60 md:right-24 right-6 xl:right-48 justify-center w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-white rounded-full">
          <img
            src={
              "https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
            }
            alt={"micorsoft"}
            className="object-contain h-full w-full hover:scale-109 shadow-xl rounded-full transition-transform duration-300 ease-in-out p-1 md:p-2 xl:p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
