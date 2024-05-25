//bg-blue-950 border-blue-950
//bg-zinc-900 border-zinc-950
//bg-rose-950 border-rose-950
//bg-purple-950 border-purple-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Purple", value: "purple", tw: "purple-950" },
] as const;

export const MODEL = {
  name: "models",
  options: [
    {
      label: "iPhoneX",
      value: "iphonex",
    },
    {
      label: "iPhone11",
      value: "iphone11",
    },
    {
      label: "iPhone12",
      value: "iphone12",
    },
    {
      label: "iPhone13",
      value: "iphone13",
    },
    {
      label: "iPhone14",
      value: "iphone14",
    },
    {
      label: "iPhone15",
      value: "iphone15",
    },
  ],
} as const;

export const MATERIALS = {
  name: "materials",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch Resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft Grippy Texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
