import React, { useState, useEffect } from "react";

export const ConstructorAlert: React.FC = () => {
  const [animationStart, setAnimationStart] = useState<boolean>(false);

  useEffect(() => {
    setAnimationStart(true);

    setTimeout(() => {
      setAnimationStart(false);
    }, 2000);
  }, []);

  return (
    <div className={`constructor__alert ${animationStart ? "active" : ""}`}>
      Your custom setup been added in basket!
    </div>
  );
};
