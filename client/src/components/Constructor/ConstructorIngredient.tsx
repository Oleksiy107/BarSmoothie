import React, { useState } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReduxStore } from "../../globalTypes/storeTypes";
import { ChangeIngredientFunc, RemoveFunction } from "./Constructor";

type ConstructorIngredientprops = {
  ingredientType: string;
  fieldId: string;
  removeFunc: RemoveFunction;
  changeIngredientFunc: (
    { fieldId, ingredientId, prevIngredient }: ChangeIngredientFunc,
    ingredientType: string
  ) => void;
};

export const ConstructorIngredient: React.FC<ConstructorIngredientprops> = ({
  ingredientType,
  fieldId,
  removeFunc,
  changeIngredientFunc,
}) => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const ingredients = useTypedSelector((state) => state.ingredients);
  const [selectValue, setSelectValue] = useState<string>("");
  const correctTypeIngredient =
    ingredientType === "fruits" ? ingredients.fruits : ingredients.vegetables;

  const changeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    changeIngredientFunc(
      { fieldId, ingredientId: value, prevIngredient: selectValue },
      ingredientType
    );
    setSelectValue(value);
  };

  const removeHandler = () => {
    selectValue
      ? removeFunc(fieldId, ingredientType, selectValue)
      : removeFunc(fieldId, ingredientType, "null");
  };

  return (
    <div className="constructor__ingredient-field">
      <select
        name={ingredientType}
        id={ingredientType}
        onChange={changeHandler}
        value={selectValue}
        className="constructor__ingredient-select"
      >
        <option value="empty" className="constructor__ingredient-select">
          Choose ingredients
        </option>
        {correctTypeIngredient.map(({ name, id, inStock, literPrice }) => (
          <option
            value={id}
            disabled={inStock ? false : true}
            key={id}
            className="constructor__ingredient-select"
          >
            {inStock
              ? `${name} - ${literPrice}$/1000ml`
              : `[${name}] Out of Stock`}
          </option>
        ))}
      </select>
      <button onClick={removeHandler}>Delete</button>
    </div>
  );
};
