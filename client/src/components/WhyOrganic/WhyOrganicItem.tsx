import { useState } from "react";

type WhyOrganicItemProps = {
  title: string;
  text: string;
  index: number;
  whatAnOpen: boolean[];
  setWhatAnOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
};

export const WhyOrganicItem: React.FC<WhyOrganicItemProps> = ({
  title,
  text,
  index,
  whatAnOpen,
  setWhatAnOpen,
}) => {
  const clickHandler = () => {
    const tempState: boolean[] = new Array(3).fill(false);
    // const tempState: boolean[] = [false, false, false];
    //TODO check syntax upper

    if (whatAnOpen[index] === true) {
      setWhatAnOpen(tempState);
    } else {
      tempState.splice(index, 1, !tempState[index]);
      setWhatAnOpen(tempState);
    }
  };

  return (
    <li className="why-organic__item">
      <div className="why-organic__dropdown" onClick={clickHandler}>
        <div
          className={`why-organic__item-icon ${
            whatAnOpen[index] === true ? "active" : ""
          }`}
        ></div>
        <h3 className="why-organic__item-title">{title}</h3>
      </div>
      <div
        className={`why-organic__item-text ${
          whatAnOpen[index] === true ? "active" : ""
        }`}
      >
        <p>{text}</p>
      </div>
    </li>
  );
};
