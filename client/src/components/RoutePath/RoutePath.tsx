import { useLocation } from "react-router-dom";
import "./RoutePath.scss";

export const RoutePath = () => {
  const location = useLocation();

  return (
    <div className="route-path">
      <div className="container">
        <div className="route-path__text">
          <p>
            Home {">"} {location.pathname.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};
