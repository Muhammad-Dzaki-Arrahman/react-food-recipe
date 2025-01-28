import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function ChiefCard({ chief }) {
  return (
    <>
      <div className="chief-card">
        <img src={chief.img} alt="" />
        <div className="chief-card-info">
          <div className="chief-card-name">{chief.name}</div>
          <p className="chief-recipe-count">
            Recipes: <b>{chief.recipesCount}</b>
          </p>
          <p className="chief-cuisine">
            Cuisine: <b>{chief.cuisine}</b>
          </p>
          <p className="chief-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </p>
        </div>
      </div>
    </>
  );
}
