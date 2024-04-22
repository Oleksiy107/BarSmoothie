export type IngredientItem = {
  id: string;
  inStock: boolean;
  name: string;
  literPrice: number;
};

export type IngredientList = {
  [category: string]: IngredientItem[];
};

export type PortionItem = {
  name: string;
  id: string;
  size: number;
};

export type TemplateIngredientItem = {
  name: string;
  id: string;
  inStock: boolean;
  literPrice: number;
  amount: number;
  multiple: number;
};

export type TemplateItem = {
  name: string;
  portionSize: number;
  ingredients: TemplateIngredientItem[];
  imageSrc: string;
  itemId: string;
  count: number;
};

export type ConstuctorIngredientItem = {
  name: string;
  id: string;
  inStock: boolean;
  literPrice: number;
  fieldId: string;
  amount: number;
  multiple: number;
};

export type BasketItem = {
  name: string;
  portionSize: number;
  ingredients: ConstuctorIngredientItem[];
  imageSrc: string;
  itemId: string;
  price: number;
  count: number;
};

export type UserData = {
  userName: string;
  userTel: string;
  deliveryType: string;
  adress?: string;
};

export type Basket = {
  items: BasketItem[];
  isBasketOpen: boolean;
};

export type ReduxStore = {
  ingredients: IngredientList;
  portions: PortionItem[];
  templates: TemplateItem[];
  templateIngredients: ConstuctorIngredientItem[];
  basket: Basket;
  userData: UserData;
};
