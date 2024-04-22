import { useState } from "react";
import "./Gallery.scss";

const tabsData = [
  { title: "All", filter: "" },
  { title: "Fruits", filter: "fruits" },
  { title: "Vegetables", filter: "vegetables" },
];

const tabContent = [
  {
    imgSrc: "/static/images/gallery-photo-1.jpg",
    filter: "fruits",
  },
  {
    imgSrc: "/static/images/gallery-photo-2.jpg",
    filter: "fruits",
  },
  {
    imgSrc: "/static/images/gallery-photo-3.jpg",
    filter: "fruits",
  },
  {
    imgSrc: "/static/images/gallery-photo-4.jpg",
    filter: "vegetables",
  },
  {
    imgSrc: "/static/images/gallery-photo-5.jpg",
    filter: "vegetables",
  },
  {
    imgSrc: "/static/images/gallery-photo-6.jpg",
    filter: "vegetables",
  },
  {
    imgSrc: "/static/images/gallery-photo-7.jpg",
    filter: "vegetables",
  },
];

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabCurrContent, setTabCurrContent] =
    useState<{ imgSrc: string; filter: string }[]>(tabContent);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    if (index === 0) return setTabCurrContent(tabContent);

    const filterValue = tabsData[index].filter;
    const filteredList = tabContent.filter(
      ({ filter }) => filter === filterValue
    );

    setTabCurrContent(filteredList);
  };

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__title">Our Gallery</h2>
        <ul className="gallery__tabs-list">
          {tabsData.map(({ title }, index) => (
            <li
              className={`gallery__tabs-item ${
                activeTab === index ? "active" : ""
              }`}
              key={index}
              onClick={() => handleTabClick(index)}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="gallery__photos-box">
          {tabCurrContent.map(({ imgSrc }, index) => (
            <div className="gallery__box" key={index}>
              <img src={imgSrc} alt="image-description" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
