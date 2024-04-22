import { ReduxStore } from "../../globalTypes/storeTypes";
import { fetchIngredients } from "../reducers/ingredientsReducer";
import { fetchPortionSize } from "../reducers/portionsReducer";
import { fetchTemplates } from "../reducers/templatesReducer";
import { store } from "../StoreProvider";

export const stateInitialSetter = async () => {
  const currentStore: ReduxStore = store.getState();
  const { ingredients, portions, templates } = currentStore;

  if (ingredients.fruits.length < 2) {
    await store.dispatch(fetchIngredients());
  }

  if (portions.length < 2) {
    await store.dispatch(fetchPortionSize());
  }

  if (templates.length < 2) {
    await store.dispatch(fetchTemplates());
  }
};
