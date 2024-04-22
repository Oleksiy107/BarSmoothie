import { TemplateIngredientItem } from "../globalTypes/storeTypes";

export default (constructorIngredients: TemplateIngredientItem[]) => {
  const price = constructorIngredients.reduce(
    (accum, ingredient) =>
      accum + (ingredient.amount / 1000) * ingredient.literPrice,
    0
  );

  return Number(price.toFixed(2));
};
