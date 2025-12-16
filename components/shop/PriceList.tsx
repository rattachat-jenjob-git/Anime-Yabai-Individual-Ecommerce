import React from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const priceArray = [
  { title: "ต่ำกว่า ฿1000", value: "0-1000" },
  { title: "฿1000 - ฿5000", value: "1000-5000" },
  { title: "฿5000 - ฿10000", value: "5000-10000" },
  { title: "฿10000 - ฿20000", value: "10000-20000" },
  { title: "มากกว่า ฿20000", value: "20000-9999999" },
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}
const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">ราคา</Title>
      <RadioGroup className="mt-2 space-y-1" value={selectedPrice || ""}>
        {priceArray?.map((price, index) => (
          <div
            key={index}
            onClick={() => setSelectedPrice(price?.value)}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={price?.value}
              id={price?.value}
              className="rounded-sm"
            />
            <Label
              htmlFor={price.value}
              className={`${selectedPrice === price?.value ? "font-semibold text-green-400" : "font-normal"}`}
            >
              {price?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="text-sm  text-darkRed font-medium mt-2 underline underline-offset-2 decoration-1 hover:text-black hoverEffect"
        >
          ล้างตัวกรอง
        </button>
      )}
    </div>
  );
};

export default PriceList;
