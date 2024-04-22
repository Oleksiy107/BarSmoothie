import { Fragment, useEffect, useState } from "react";
import { PageIntro } from "../PageIntro/PageIntro";
import { RoutePath } from "../RoutePath/RoutePath";
import { v4 as getUniqId } from "uuid";
import { ConstructorIngredientBlock } from "./ConstructorIngredientBlock";
import "./Constructor.scss";
import { PortionItem, ReduxStore } from "../../globalTypes/storeTypes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  addExistedIngredient,
  addNewIngredient,
  recalculateAmount,
  removeIngredient,
  removeMultsIngredient,
  resetCurrIngredient,
} from "../../store/reducers/templateIngredientsReducer";
import { addBasketItem } from "../../store/reducers/basketReducer";
import { ConstructorAlert } from "./ConstructorAlert";
import calculatePrice from "../../utils/calculatePrice";

const customSmoothieImgSrc = "/static/images/customSmoothie1.jpg";

export type ChangeIngredientFunc = {
  fieldId: string;
  ingredientId: string;
  prevIngredient: string;
};

export type RemoveFunction = (
  fieldId: string,
  ingredientId: string,
  valueContained: string
) => void;

export const Constructor = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const ingredients = useTypedSelector((state) => state.ingredients);
  const portions = useTypedSelector((state) => state.portions);
  const templateIngredients = useTypedSelector(
    (state) => state.templateIngredients
  );
  const dispatch = useDispatch();
  const [activeIngredientsList, setActiveIngredientsList] = useState<{
    fruits: string[];
    vegetables: string[];
    activeFields: number;
  }>({
    fruits: [],
    vegetables: [],
    activeFields: 0,
  });
  const [currentPortion, setCurrentPortion] = useState<PortionItem>(
    portions[0]
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [purchasedAlertShown, setPurchasedAlertShown] =
    useState<boolean>(false);

  useEffect(() => {
    setTotalPrice(calculatePrice(templateIngredients));
  }, [templateIngredients]);

  useEffect(() => {
    return () => {
      dispatch(resetCurrIngredient());
    };
  }, []);

  const addIngredientField = (ingredientType: string) => {
    const { fruits, vegetables, activeFields } = activeIngredientsList;

    if (activeFields >= 5) return;

    if (ingredientType === "fruits") {
      const newState = {
        fruits: [...fruits, getUniqId()],
        vegetables,
        activeFields: activeFields + 1,
      };

      setActiveIngredientsList(newState);
    } else if (ingredientType === "vegetables") {
      const newState = {
        fruits,
        vegetables: [...vegetables, getUniqId()],
        activeFields: activeFields + 1,
      };

      setActiveIngredientsList(newState);
    }
  };

  const removeIngredientField: RemoveFunction = (
    fieldId,
    ingredientType,
    valueContained
  ) => {
    const { fruits, vegetables, activeFields } = activeIngredientsList;
    const existedIngredient = valueContained
      ? templateIngredients.find(({ id }) => id === valueContained)
      : null;

    if (existedIngredient) {
      existedIngredient.multiple > 1
        ? dispatch(removeMultsIngredient(valueContained))
        : dispatch(removeIngredient(valueContained));
    }

    if (ingredientType === "fruits") {
      const newState = {
        fruits: fruits.filter((id) => id !== fieldId),
        vegetables,
        activeFields: activeFields - 1,
      };

      setActiveIngredientsList(newState);
    } else if (ingredientType === "vegetables") {
      const newState = {
        fruits,
        vegetables: vegetables.filter((id) => id !== fieldId),
        activeFields: activeFields - 1,
      };
      setActiveIngredientsList(newState);
    }

    dispatch(recalculateAmount(currentPortion.size));
  };

  const changePortion = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const portion = portions.find(({ id }) => id === target.id);

    if (portion) {
      setCurrentPortion(portion);
    }

    dispatch(recalculateAmount(portion?.size));
  };

  const changeIngredient = (
    { fieldId, ingredientId, prevIngredient }: ChangeIngredientFunc,
    ingredientType: string
  ) => {
    const ingredientFromStore = ingredients[ingredientType].find(
      ({ id }) => id === ingredientId
    );
    const existedIngredient = templateIngredients.find(
      ({ id }) => id === ingredientId
    );
    const existedPrevIngredient = templateIngredients.find(
      ({ id }) => id === prevIngredient
    );

    if (existedPrevIngredient) {
      if (existedPrevIngredient.multiple > 1) {
        dispatch(removeMultsIngredient(existedPrevIngredient.id));
      }

      if (existedPrevIngredient.multiple === 1) {
        dispatch(removeIngredient(existedPrevIngredient.id));
      }
    }

    if (ingredientFromStore) {
      if (!existedIngredient) {
        dispatch(
          addNewIngredient({ ...ingredientFromStore, amount: 20, multiple: 1 })
        );
      }

      if (existedIngredient) {
        dispatch(addExistedIngredient(ingredientId));
      }
    }

    dispatch(recalculateAmount(currentPortion.size));
  };

  const addCustomHandler = () => {
    dispatch(
      addBasketItem({
        name: "Custom smoothie",
        portionSize: currentPortion.size,
        ingredients: templateIngredients,
        imageSrc: customSmoothieImgSrc,
        itemId: getUniqId(),
        price: totalPrice,
        count: 1,
      })
    );

    setPurchasedAlertShown(true);

    setTimeout(() => {
      setPurchasedAlertShown(false);
    }, 3000);
    dispatch(resetCurrIngredient());
    setCurrentPortion(portions[0]);
    setActiveIngredientsList({
      fruits: [],
      vegetables: [],
      activeFields: 0,
    });
  };

  return (
    <>
      <PageIntro title="constructor">
        Here you can create your own smoothie from the ingredients you are
        interested in
      </PageIntro>
      <RoutePath />
      <section className="constructor">
        <div className="container">
          <div className="constructor__settings">
            <div className="constructor__portions">
              <h2 className="constructor__portions-title">
                Choose your portion
              </h2>
              <div className="constructor__portions-box">
                {portions.map(({ name, id, size }) => (
                  <div className="constructor__portions-item" key={id}>
                    <label
                      htmlFor={id}
                      className={`constructor__portions-label ${
                        id === currentPortion.id ? "active" : ""
                      }`}
                    >
                      {name}, {size} ml
                    </label>
                    <input
                      type="radio"
                      name="portion"
                      id={id}
                      value={id}
                      checked={id === currentPortion.id ? true : false}
                      onChange={changePortion}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="constructor__ingredients-box">
              <h2 className="constructor__ingredients-box-title">
                Add ingredients (Max 5)
              </h2>
              <div className="constructor__ingredients-btn-holder">
                <button
                  className="constructor__ingredients-button"
                  onClick={() => addIngredientField("fruits")}
                  disabled={
                    activeIngredientsList.activeFields === 5 ? true : false
                  }
                >
                  Add <br /> fruits
                </button>
                <button
                  className="constructor__ingredients-button"
                  onClick={() => addIngredientField("vegetables")}
                  disabled={
                    activeIngredientsList.activeFields === 5 ? true : false
                  }
                >
                  Add <br /> vegetables
                </button>
              </div>
              {activeIngredientsList.fruits.length > 0 && (
                <ConstructorIngredientBlock
                  title="fruits"
                  ingredientType="fruits"
                  ingredientList={activeIngredientsList.fruits}
                  removeFunc={removeIngredientField}
                  changeIngredientFunc={changeIngredient}
                />
              )}
              {activeIngredientsList.vegetables.length > 0 && (
                <ConstructorIngredientBlock
                  title="vegetables"
                  ingredientType="vegetables"
                  ingredientList={activeIngredientsList.vegetables}
                  removeFunc={removeIngredientField}
                  changeIngredientFunc={changeIngredient}
                />
              )}
            </div>
          </div>
          <div className="constructor__template">
            <div className="constructor__template-img">
              <img src={customSmoothieImgSrc} alt="custom-smoothie" />
            </div>
            <div className="constructor__template-detail">
              <h2 className="constructor__template-title">Custom Smoothie</h2>
              <span className="constructor__template-portion">
                Portion: {currentPortion.size} ml
              </span>
              <span className="constructor__template-ingredients">
                Ingredients:{" "}
                {templateIngredients.length > 0 ? (
                  <ul className="constructor__template-ingredients-list">
                    {templateIngredients.map(({ name, amount }, index) => (
                      <li key={index}>
                        {name} ({amount.toFixed(2)}ml)
                      </li>
                    ))}
                  </ul>
                ) : (
                  "nothing for now, add ingredients first"
                )}
              </span>
              <span className="constructor__template-price">
                Total price:{" "}
                <span className="price-alert">{totalPrice.toFixed(2)}$</span>
              </span>
              <button
                className="constructor__template-purchase"
                disabled={templateIngredients.length > 0 ? false : true}
                onClick={addCustomHandler}
              >
                Add in basket
              </button>
            </div>
          </div>
        </div>
      </section>
      {purchasedAlertShown && <ConstructorAlert />}
    </>
  );
};
