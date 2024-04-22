import { Link } from "react-router-dom";
import "./Footer.scss";

const logoImgSrc = "/static/images/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="page-foot">
      <div className="page-foot__content-block container">
        <div className="page-foot__common-info">
          <Link to="/" className="page-foot__logo-link">
            <img src={logoImgSrc} alt="logo" />
          </Link>
          <div className="page-foot__schedule">
            <p className="page-foot__schedule-text">
              Weekdays:{" "}
              <span className="page-foot__schedule-time">
                08:00am – 08:00pm
              </span>
            </p>
            <p className="page-foot__schedule-text">
              Weekends:{" "}
              <span className="page-foot__schedule-time">
                10:00am – 06:00pm
              </span>
            </p>
          </div>
          <div className="page-foot__line"></div>
          <div className="page-foot__social">
            <span className="page-foot__social-text">Get social</span>
            <ul className="page-foot__social-list">
              <li className="page-foot__social-item">[icons]</li>
              <li className="page-foot__social-item">[icons]</li>
              <li className="page-foot__social-item">[icons]</li>
            </ul>
          </div>
        </div>
        <div className="page-foot__contacts">
          <h2 className="page-foot__contacts-title">Contacts</h2>
          <ul className="page-foot__contacts-list">
            <li className="page-foot__contacts-item">
              <span className="page-foot__contact-icon">[icons]</span>
              <span className="page-foot__contact-text">
                523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA
              </span>
            </li>
            <li className="page-foot__contacts-item">
              <span className="page-foot__contact-icon">[icons]</span>
              <a href="tel:123-456-7890" className="page-foot__contact-text">
                123-456-7890
              </a>
            </li>
            <li className="page-foot__contacts-item">
              <span className="page-foot__contact-icon">[icons]</span>
              <a
                href="mailto:info@demolink.org"
                className="page-foot__contact-text"
              >
                info@demolink.org
              </a>
            </li>
          </ul>
        </div>
        <div className="page-foot__newsletter">
          <h2 className="page-foot__newsletter-title">NEWSLETTER</h2>
          <div className="page-foot__newsletter-text">
            <p>
              Subscribe to our newsletter to receive weekly news, updates,
              special offers, and exclusive discounts.
            </p>
          </div>
          <div className="page-foot__input-holder">
            <input
              type="text"
              placeholder="Enter your e-mail *"
              className="page-foot__input"
            />
            <button className="page-foot__button">+</button>
          </div>
        </div>
      </div>
      <div className="page-foot__copyright-block">
        <div className="page-foot__copyright-content container">
          <div className="page-foot__copyright-text">
            <p>Smoothez — All Right Reserved. © 2021</p>
          </div>
          <ul className="page-foot__payments-list">
            <li className="page-foot__payments-item">[icons]</li>
            <li className="page-foot__payments-item">[icons]</li>
            <li className="page-foot__payments-item">[icons]</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
