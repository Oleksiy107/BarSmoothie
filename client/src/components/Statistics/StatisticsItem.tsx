import { useState, useEffect } from "react";

type StatisticsItemProps = {
  number: number;
  text: string;
};

export const StatisticsItem: React.FC<StatisticsItemProps> = ({
  number,
  text,
}) => {
  const [numberValue, setNumberValue] = useState(0);

  useEffect(() => {
    if (number > numberValue) {
      setTimeout(() => {
        setNumberValue(numberValue + 1);
      }, 0);
    }
  }, [numberValue]);

  const getCurrentText: () => JSX.Element = () => {
    const words = text.split(" ");

    if (words.length === 2) {
      return (
        <>
          {words[0]}
          <br />
          {words[1]}
        </>
      );
    }

    return <>{text}</>;
  };

  return (
    <li className="statistics__item">
      <span className="statistics__item-number">{numberValue}</span>
      <div className="statistics__item-line"></div>
      <span className="statistics__item-text">{getCurrentText()}</span>
    </li>
  );
};
