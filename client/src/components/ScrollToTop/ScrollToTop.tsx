import "./ScrollToTop.scss";

type ScrollToTopProps = {
  userScrollY: number;
};

type FunctionType = () => void;

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ userScrollY }) => {
  const scrollToTop: FunctionType = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={scrollToTop}
      className={`scroll-to-top ${userScrollY > 200 ? "to-top-active" : ""}`}
    >
      {">"}
    </div>
  );
};
