import { v4 as getUniqId } from "uuid";

export default [
  {
    name: "Berry Bliss",
    portionSize: 200,
    ingredients: [
      {
        name: "Strawberries",
        id: "strawberries",
        inStock: true,
        literPrice: 40,
        amount: 40,
        multiple: 3,
      },
      {
        name: "Blueberries",
        id: "blueberries",
        inStock: true,
        literPrice: 45,
        amount: 40,
        multiple: 2,
      },
    ],
    imageSrc:
      "https://cdn.leonardo.ai/users/6e2b8add-0db3-4ad0-bb18-645f53853993/generations/67538f7d-2272-46f8-9466-4c99e3bd3b17/Absolute_Reality_v16_Smoothie_cup_2.jpg?w=512",
    itemId: getUniqId(),
    count: 1,
  },
  {
    name: "Green Power",
    portionSize: 200,
    ingredients: [
      {
        name: "Kiwi",
        id: "kiwi",
        inStock: true,
        literPrice: 20,
        amount: 40,
        multiple: 2,
      },
      {
        name: "Apples",
        id: "apples",
        inStock: true,
        literPrice: 15,
        amount: 40,
        multiple: 2,
      },
      {
        name: "Spinach",
        id: "spinach",
        inStock: true,
        literPrice: 10,
        amount: 40,
        multiple: 1,
      },
    ],
    imageSrc:
      "https://cdn.leonardo.ai/users/6e2b8add-0db3-4ad0-bb18-645f53853993/generations/d4fbd24c-7912-4887-bb99-0cb898c66207/Absolute_Reality_v16_Smoothie_cup_with_Kiwi_with_Apples_with_S_0.jpg?w=512",
    itemId: getUniqId(),
    count: 1,
  },
  {
    name: "Citrus Delight",
    portionSize: 200,
    ingredients: [
      {
        name: "Oranges",
        id: "oranges",
        inStock: true,
        literPrice: 25,
        amount: 40,
        multiple: 3,
      },
      {
        name: "Lemons",
        id: "lemons",
        inStock: true,
        literPrice: 15,
        amount: 40,
        multiple: 2,
      },
    ],
    imageSrc:
      "https://cdn.leonardo.ai/users/6e2b8add-0db3-4ad0-bb18-645f53853993/generations/23214246-c6f1-47ee-968b-120e2aaddba1/Absolute_Reality_v16_Smoothie_cup_with_Oranges_with_Lemons_1.jpg?w=512",
    itemId: getUniqId(),
    count: 1,
  },
  {
    name: "Tropical Fusion",
    portionSize: 200,
    ingredients: [
      {
        name: "Mangoes",
        id: "mangoes",
        inStock: true,
        literPrice: 35,
        amount: 40,
        multiple: 2,
      },
      {
        name: "Bananas",
        id: "bananas",
        inStock: true,
        literPrice: 20,
        amount: 40,
        multiple: 2,
      },
      {
        name: "Spinach",
        id: "spinach",
        inStock: true,
        literPrice: 10,
        amount: 40,
        multiple: 1,
      },
    ],
    imageSrc:
      "https://cdn.leonardo.ai/users/6e2b8add-0db3-4ad0-bb18-645f53853993/generations/dcf92763-acbc-4d25-838d-0499f00e7d6b/Absolute_Reality_v16_Smoothie_cup_with_Mangoes_with_Bananas_wi_0.jpg?w=512",
    itemId: getUniqId(),
    count: 1,
  },
];
