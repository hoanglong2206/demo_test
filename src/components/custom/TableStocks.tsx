import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";
import { Separator } from "../ui/separator";

const dataStocks = [
  {
    name: "Meta",
    shortcut: "META",
    marketCap: 377.37,
    volume: 48,
    supply: 38.4,
    tradeBuy: 67,
    tradeSell: 3,
    image:
      "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000",
  },
  {
    name: "Apple Inc",
    shortcut: "AAPL",
    marketCap: 377.37,
    volume: 48,
    supply: 38.4,
    tradeBuy: 67,
    tradeSell: 3,
    image: "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
  },
  {
    name: "Spotify",
    shortcut: "SPOT",
    marketCap: 377.37,
    volume: 48,
    supply: 38.4,
    tradeBuy: 67,
    tradeSell: 3,
    image:
      "https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000",
  },
  {
    name: "Microsoft",
    shortcut: "MSFT",
    marketCap: 377.37,
    volume: 48,
    supply: 38.4,
    tradeBuy: 67,
    tradeSell: 3,
    image: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
  },
  {
    name: "Airbnb",
    shortcut: "ABNB",
    marketCap: 377.37,
    volume: 48,
    supply: 38.4,
    tradeBuy: 67,
    tradeSell: 3,
    image: "https://img.icons8.com/?size=100&id=103424&format=png&color=000000",
  },
  {
    name: "Google",
    shortcut: "GOOGL",
    marketCap: 377.37,
    volume: 48,
    supply: 38.4,
    tradeBuy: 67,
    tradeSell: 3,
    image: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
  },
];

export default function TableStock() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">STOCK NAME</TableHead>
          <TableHead className="text-right">MARKET CAP</TableHead>
          <TableHead className="text-right">VOLUME</TableHead>
          <TableHead className="text-right">SUPPLY</TableHead>
          <TableHead className="text-right">TRADE ACTIVITIES</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataStocks.map((data) => (
          <TableRow key={data.name}>
            <TableCell className="flex items-center justify-start gap-x-2">
              <div className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full">
                <img
                  src={data.image}
                  alt={data.name}
                  className="object-contain h-full w-full hover:scale-109 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="space-y-1">
                <div className="font-semibold">{data.shortcut}</div>
                <div className="text-muted-foreground">{data.name}</div>
              </div>
            </TableCell>
            <TableCell className="text-right font-semibold">
              {formatPrice(data.marketCap)} B
            </TableCell>
            <TableCell className="text-right font-semibold">
              {formatPrice(data.volume)} B
            </TableCell>
            <TableCell className="text-right font-semibold">
              {formatPrice(data.supply)} B
            </TableCell>
            <TableCell className="flex items-center justify-end gap-x-2 font-semibold h-12">
              <div className="flex items-center justify-center text-green-500">
                {data.tradeBuy}% Buy
              </div>
              <Separator orientation="vertical" />
              <div className="flex items-center justify-center text-red-500">
                {data.tradeSell}% Sell
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
