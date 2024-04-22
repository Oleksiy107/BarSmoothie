import React from "react";

type WhyOrganicCardProrps = {
  title: string;
  text: string;
};

export const WhyOrganicCard: React.FC<WhyOrganicCardProrps> = ({
  title,
  text,
}) => {
  return (
    <div className="why-organic__card">
      <div>
        <h3 className="why-organic__card-title">{title}</h3>
        <div className="why-organic__card-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
