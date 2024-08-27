"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { firstLetterUppercase, formatPrice } from "@/lib/utils";
import { MoveDown, MoveUp, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const brands: any[] = [
  {
    name: "apple",
    image: "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
    totalShared: 310.4,
    totalReturn: -1.1,
  },
  {
    name: "facebook",
    image:
      "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000",
    totalShared: 140.45,
    totalReturn: -0.1,
  },
  {
    name: "microsoft",
    image: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
    totalShared: 240.98,
    totalReturn: 0.85,
  },
  {
    name: "google",
    image: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
    totalShared: 99.12,
    totalReturn: -0.08,
  },
  {
    name: "shopify",
    image:
      "https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000",
    totalShared: 28.57,
    totalReturn: -6.48,
  },
];

const chartData = [
  { month: "January", stocks: 186 },
  { month: "February", stocks: 309 },
  { month: "March", stocks: 237 },
  { month: "April", stocks: 73 },
  { month: "May", stocks: 209 },
  { month: "June", stocks: 214 },
];

const chartConfig = {} satisfies ChartConfig;

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState<string>("7d");

  const filteredData = appletData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 1;
    if (timeRange === "7d") {
      daysToSubtract = 7;
    } else if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "90d") {
      daysToSubtract = 90;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <div className="space-y-8">
      <h1 className="text-start font-bold">My Portfolio</h1>
      <Carousel
        className="w-full bg-slate-50 dark:bg-slate-950 py-2 rounded-lg shadow-sm"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="p-4">
          {brands.map((brand, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 xl:basis-1/4 cursor-pointer "
            >
              <div className=" flex flex-col gap-y-4 bg-slate-100 dark:bg-slate-900 py-6 px-3 rounded-md shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    <div className="text-base font-semibold">
                      {firstLetterUppercase(brand.name)}
                    </div>
                  </div>
                  <div className="w-24">
                    <ChartContainer config={chartConfig}>
                      <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                          dataKey="stocks"
                          type="natural"
                          fill={brand.totalReturn > 0 ? "green" : "red"}
                          fillOpacity={0.4}
                          stroke={brand.totalReturn > 0 ? "green" : "red"}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </div>
                <div className="flex items-center justify-between pl-4 pr-2">
                  <div className="space-y-2 text-muted-foreground">
                    <div>Total Shared</div>
                    <div>Total Return</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold">
                      {formatPrice(brand.totalShared)}
                    </div>
                    <div
                      className={`flex items-center
                      ${
                        brand.totalReturn > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      `}
                    >
                      {brand.totalReturn > 0 ? "+" : ""}
                      {brand.totalReturn}%
                      {brand.totalReturn > 0 ? (
                        <MoveUp className="h-4 w-4" />
                      ) : (
                        <MoveDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        <Card className="col-span-1 xl:col-span-2">
          <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="flex items-center gap-x-10">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-16 h-16 p-1 bg-white rounded-full">
                  <img
                    src={
                      "https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                    }
                    alt={"Apple"}
                    className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">Apple inc</div>
                  <div className="text-muted-foreground">AAPL</div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <div className="flex items-center gap-x-1">
                  <div className="rounded-lg px-2 py-1 text-red-600 flex items-center text-sm bg-red-300">
                    <span>-1.10%</span>
                    <MoveDown className="h-3 w-3" />
                  </div>
                  <div className="text-lg font-bold">$150.70</div>
                </div>
                <div className="text-muted-foreground">
                  Last updated 5 mins ago
                </div>
              </div>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger
                className="w-[160px] rounded-lg sm:ml-auto"
                aria-label="Select a value"
              >
                <SelectValue placeholder="Last 1 day" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg">
                  Last 3 months
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                  Last 30 days
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  Last 7 days
                </SelectItem>
                <SelectItem value="1d" className="rounded-lg">
                  Last 1 day
                </SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-96 w-full"
            >
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="blue" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="totalShares"
                  type="natural"
                  fill="blue"
                  stroke="blue"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex items-center justify-between gap-2 flex-row">
            <CardTitle>My watchlist</CardTitle>
            <Button variant={"ghost"} size={"icon"}>
              <Plus className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-11 h-11 p-1 bg-white rounded-full">
                  <img
                    src={
                      "https://img.icons8.com/?size=100&id=13611&format=png&color=000000"
                    }
                    alt={"Paypal"}
                    className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">PYPL</div>
                  <div className="text-muted-foreground">Paypal</div>
                </div>
              </div>
              <div className="space-y-1 text-end">
                <div className="text-lg font-semibold">$87.66</div>
                <div className="text-red-500 font-medium">-3.86%</div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-11 h-11 p-1 bg-white rounded-full">
                  <img
                    src={
                      "https://img.icons8.com/?size=100&id=103424&format=png&color=000000"
                    }
                    alt={"Airbnb"}
                    className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">ABNB</div>
                  <div className="text-muted-foreground">Airbnb</div>
                </div>
              </div>
              <div className="space-y-1 text-end">
                <div className="text-lg font-semibold">$132.72</div>
                <div className="text-red-500 font-medium">-10.29%</div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-11 h-11 p-1 bg-white rounded-full">
                  <img
                    src={
                      "https://img.icons8.com/?size=100&id=13657&format=png&color=000000"
                    }
                    alt={"Dropbox"}
                    className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">DBX</div>
                  <div className="text-muted-foreground">Dropbox Inc</div>
                </div>
              </div>
              <div className="space-y-1 text-end">
                <div className="text-lg font-semibold">$20.44</div>
                <div className="text-red-500 font-medium">-3.08%</div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-11 h-11 p-1 bg-white rounded-full">
                  <img
                    src={
                      "https://img.icons8.com/?size=100&id=G9XXzb9XaEKX&format=png&color=000000"
                    }
                    alt={"Spotify"}
                    className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">SPOT</div>
                  <div className="text-muted-foreground">Spotify</div>
                </div>
              </div>
              <div className="space-y-1 text-end">
                <div className="text-lg font-semibold">$310.40</div>
                <div className="text-red-500 font-medium">-1.10%</div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-11 h-11 p-1 bg-white rounded-full">
                  <img
                    src={
                      "https://img.icons8.com/?size=100&id=12519&format=png&color=000000"
                    }
                    alt={"Sony"}
                    className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">SONY</div>
                  <div className="text-muted-foreground">Playstation</div>
                </div>
              </div>
              <div className="space-y-1 text-end">
                <div className="text-lg font-semibold">$70.86</div>
                <div className="text-green-500 font-medium">+0.98%</div>
              </div>
            </div>
            <hr className="my-4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

const appletData = [
  { date: "2024-06-01", totalShares: 222 },
  { date: "2024-06-02", totalShares: 97 },
  { date: "2024-06-03", totalShares: 167 },
  { date: "2024-06-04", totalShares: 242 },
  { date: "2024-06-09", totalShares: 373 },
  { date: "2024-06-06", totalShares: 301 },
  { date: "2024-06-07", totalShares: 245 },
  { date: "2024-06-08", totalShares: 409 },
  { date: "2024-06-09", totalShares: 59 },
  { date: "2024-06-10", totalShares: 261 },
  { date: "2024-06-11", totalShares: 327 },
  { date: "2024-06-12", totalShares: 292 },
  { date: "2024-06-13", totalShares: 342 },
  { date: "2024-06-14", totalShares: 137 },
  { date: "2024-06-15", totalShares: 120 },
  { date: "2024-06-16", totalShares: 138 },
  { date: "2024-06-17", totalShares: 446 },
  { date: "2024-06-18", totalShares: 364 },
  { date: "2024-06-19", totalShares: 243 },
  { date: "2024-06-20", totalShares: 89 },
  { date: "2024-06-21", totalShares: 137 },
  { date: "2024-06-22", totalShares: 224 },
  { date: "2024-06-23", totalShares: 138 },
  { date: "2024-06-24", totalShares: 387 },
  { date: "2024-06-25", totalShares: 215 },
  { date: "2024-06-26", totalShares: 75 },
  { date: "2024-06-27", totalShares: 383 },
  { date: "2024-06-28", totalShares: 122 },
  { date: "2024-06-29", totalShares: 315 },
  { date: "2024-06-30", totalShares: 454 },
  { date: "2024-07-01", totalShares: 165 },
  { date: "2024-07-02", totalShares: 293 },
  { date: "2024-07-03", totalShares: 247 },
  { date: "2024-07-04", totalShares: 385 },
  { date: "2024-07-05", totalShares: 481 },
  { date: "2024-07-06", totalShares: 498 },
  { date: "2024-07-07", totalShares: 388 },
  { date: "2024-07-08", totalShares: 149 },
  { date: "2024-07-09", totalShares: 227 },
  { date: "2024-07-10", totalShares: 293 },
  { date: "2024-07-11", totalShares: 335 },
  { date: "2024-07-12", totalShares: 197 },
  { date: "2024-07-13", totalShares: 197 },
  { date: "2024-07-14", totalShares: 448 },
  { date: "2024-07-15", totalShares: 473 },
  { date: "2024-07-16", totalShares: 338 },
  { date: "2024-07-17", totalShares: 499 },
  { date: "2024-07-18", totalShares: 315 },
  { date: "2024-07-19", totalShares: 235 },
  { date: "2024-07-20", totalShares: 177 },
  { date: "2024-07-21", totalShares: 82 },
  { date: "2024-07-22", totalShares: 81 },
  { date: "2024-07-23", totalShares: 252 },
  { date: "2024-07-24", totalShares: 294 },
  { date: "2024-07-25", totalShares: 201 },
  { date: "2024-07-26", totalShares: 213 },
  { date: "2024-07-27", totalShares: 420 },
  { date: "2024-07-28", totalShares: 233 },
  { date: "2024-07-29", totalShares: 78 },
  { date: "2024-07-30", totalShares: 340 },
  { date: "2024-07-31", totalShares: 178 },
  { date: "2024-08-01", totalShares: 178 },
  { date: "2024-08-02", totalShares: 470 },
  { date: "2024-08-03", totalShares: 103 },
  { date: "2024-08-08", totalShares: 439 },
  { date: "2024-08-09", totalShares: 88 },
  { date: "2024-08-06", totalShares: 294 },
  { date: "2024-08-07", totalShares: 323 },
  { date: "2024-08-08", totalShares: 385 },
  { date: "2024-08-09", totalShares: 438 },
  { date: "2024-08-10", totalShares: 155 },
  { date: "2024-08-11", totalShares: 92 },
  { date: "2024-08-12", totalShares: 492 },
  { date: "2024-08-13", totalShares: 81 },
  { date: "2024-08-14", totalShares: 426 },
  { date: "2024-08-15", totalShares: 307 },
  { date: "2024-08-16", totalShares: 371 },
  { date: "2024-08-17", totalShares: 475 },
  { date: "2024-08-18", totalShares: 107 },
  { date: "2024-08-19", totalShares: 341 },
  { date: "2024-08-20", totalShares: 408 },
  { date: "2024-08-21", totalShares: 169 },
  { date: "2024-08-22", totalShares: 317 },
  { date: "2024-08-23", totalShares: 480 },
  { date: "2024-08-24", totalShares: 132 },
  { date: "2024-08-25", totalShares: 141 },
  { date: "2024-08-26", totalShares: 434 },
  { date: "2024-08-27", totalShares: 448 },
  { date: "2024-08-28", totalShares: 149 },
  { date: "2024-08-29", totalShares: 103 },
  { date: "2024-08-30", totalShares: 446 },
  { date: "2024-08-31", totalShares: 293 },
];
