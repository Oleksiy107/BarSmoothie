import { Gallery } from "../Gallery/Gallery";
import { HomeTitle } from "../HomeTitle/HomeTitle";
import { OrganicInfo } from "../OrganicInfo/OrganicInfo";
import { Partners } from "../Partners/Partners";
import { Reviews } from "../Reviews/Reviews";
import { Statistics } from "../Statistics/Statistics";
import { Subscribe } from "../Subscribe/Subscribe";
import { Templates } from "../Templates/Templates";
import { WhyOrganic } from "../WhyOrganic/WhyOrganic";
import "./DefaultMain.scss";

export const DefaultMain: React.FC = () => {
  return (
    <>
      <HomeTitle />
      <OrganicInfo />
      <Templates />
      <Statistics />
      <WhyOrganic />
      <Reviews />
      <Gallery />
      <Subscribe />
      <Partners />
    </>
  );
};
