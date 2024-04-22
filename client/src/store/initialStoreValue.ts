export default {
  ingredients: {
    fruits: [
      {
        id: "empty",
        inStock: false,
        name: "Empty",
        literPrice: 0,
      },
    ],
    vegetables: [
      {
        id: "empty",
        inStock: false,
        name: "Empty",
        literPrice: 0,
      },
    ],
  },
  portions: [{ name: "Empty", id: "empty", size: 0 }],
  templates: [
    {
      name: "Loading...",
      portionSize: 200,
      ingredients: [],
      imageSrc: "",
      itemId: "id",
      count: 1,
    },
  ],
  templateIngredients: [],
  basket: {
    items: [],
    isBasketOpen: false,
  },
  userData: {
    userName: "Empty",
    userTel: "Empty",
    deliveryType: "Empty",
  },
};
