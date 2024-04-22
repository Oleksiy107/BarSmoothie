import "./OurAdvantages.scss";

type OurAdvantagesProps = {
  title: string;
  children: string;
  image: string;
  napravlenie: string;
};

export const OurAdvantages: React.FC<OurAdvantagesProps> = ({
  title,
  children,
  image,
  napravlenie = "default",
}) => {
  const napr = napravlenie !== "default" ? "our-advantages_reverse" : "";
  const textAlign =
    napravlenie === "default" ? "our-advantages__text-block_reverse" : "";

  return (
    <div className={`our-advantages ${napr}`}>
      <div className={`our-advantages__text-block ${textAlign}`}>
        <h2 className="our-advantages__title">{title}</h2>
        <div className="our-advantages__text">
          <p>{children}</p>
        </div>
      </div>
      <div className="our-advantages__img-wrap">
        <img src={image} alt="img-discription" />
      </div>
    </div>
  );
};
