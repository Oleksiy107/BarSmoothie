import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReduxStore } from "../../globalTypes/storeTypes";
import { TemplateItem } from "./TemplatesItem";
import { v4 as getUniqId } from "uuid";
import "./Templates.scss";

export const Templates = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const templates = useTypedSelector((state) => state.templates);

  return (
    <section className="templates" id="shop">
      <div className="container">
        <h2 className="templates__title">New Flavors</h2>
        <ul className="templates__list">
          {templates.map((smoothie) => (
            <TemplateItem key={getUniqId()} {...smoothie} />
          ))}
        </ul>
      </div>
    </section>
  );
};
