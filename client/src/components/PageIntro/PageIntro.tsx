import "./PageIntro.scss";

type PageIntroProps = {
  children: React.ReactNode;
  title: string;
};

export const PageIntro: React.FC<PageIntroProps> = ({ title, children }) => {
  return (
    <div className="page-intro">
      <div className="page-intro__bg-shadow"></div>
      <div className="container">
        <h2 className="page-intro__title">{title}</h2>
        <div className="page-intro__text">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
