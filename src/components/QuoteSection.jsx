import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export default function QuoteSection() {
  return (
    <>
      <div className="section quote">
        <p className="quote-text">
          <FontAwesomeIcon icon={faQuoteLeft} />
          Great cooking is about being inspired by the simple things around
          you—fresh markets, various spices. It doesn’t necessarily have to look
          fancy.
        </p>
        <p className="quote-author">- Alton Brown</p>
      </div>
    </>
  );
}
