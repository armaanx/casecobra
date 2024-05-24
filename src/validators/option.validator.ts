//bg-blue-950 border-blue-950
//bg-zinc-900 border-zinc-950
//bg-rose-950 border-rose-950
//bg-purple-950 border-purple-950

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
};
