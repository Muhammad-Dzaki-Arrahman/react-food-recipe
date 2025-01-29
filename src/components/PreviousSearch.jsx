// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearch() {
  const searches = [
    "Pizza",
    "Burger",
    "Cookies",
    "Juice",
    "Fried Potatoes",
    "Ice Cream",
    "Lasagna",
    "Pudding",
    "Salad",
    "Soup",
  ];
  return (
    <div className="previous-search section">
      <h2>Previous Search</h2>
      <div className="previous-search-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
