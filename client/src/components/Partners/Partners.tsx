import "./Partners.scss";

const PARTNERS_LIST = [
  {
    partnerImage: "/static/images/brands-1.png",
  },
  {
    partnerImage: "/static/images/brands-2.png",
  },
  {
    partnerImage: "/static/images/brands-3.png",
  },
  {
    partnerImage: "/static/images/brands-4.png",
  },
  {
    partnerImage: "/static/images/brands-5.png",
  },
];

export const Partners: React.FC = () => {
  return (
    <section className="partners">
      <div className="container">
        <ul className="partners__list">
          {PARTNERS_LIST.map(({ partnerImage }, index) => (
            <li className="partners__item" key={index}>
              <img src={partnerImage} alt="img-discription" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
