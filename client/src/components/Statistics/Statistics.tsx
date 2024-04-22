import { StatisticsItem } from "./StatisticsItem";
import "./Statistics.scss";

const mockData = [
  { number: 245, text: "New drinks and smoothies" },
  { number: 382, text: "Special offers" },
  { number: 1267, text: "Satisfied clients" },
  { number: 474, text: "Partners throughout the USA" },
];

export const Statistics: React.FC = () => {
  return (
    <section className="statistics">
      <div className="container">
        <ul className="statistics__list">
          {mockData.map(({ number, text }, index) => (
            <StatisticsItem number={number} text={text} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
