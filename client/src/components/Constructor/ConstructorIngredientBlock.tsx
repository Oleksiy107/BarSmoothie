import React from "react";
import { ConstructorIngredient } from "./ConstructorIngredient";
import { ChangeIngredientFunc, RemoveFunction } from "./Constructor";

type ConstructorIngredientBlockProps = {
  title: string;
  ingredientType: string;
  ingredientList: string[];
  removeFunc: RemoveFunction;
  changeIngredientFunc: (
    { fieldId, ingredientId, prevIngredient }: ChangeIngredientFunc,
    ingredientType: string
  ) => void;
};

export const ConstructorIngredientBlock: React.FC<
  ConstructorIngredientBlockProps
> = ({
  title,
  ingredientList,
  ingredientType,
  removeFunc,
  changeIngredientFunc,
}) => {
  return (
    <div className="constructor__ingredient-box">
      <h3 className="constructor__ingredient-box-title">{title}:</h3>
      {ingredientList.map((fieldId) => (
        <ConstructorIngredient
          ingredientType={ingredientType}
          fieldId={fieldId}
          key={fieldId}
          removeFunc={removeFunc}
          changeIngredientFunc={changeIngredientFunc}
        />
      ))}
    </div>
  );
};
