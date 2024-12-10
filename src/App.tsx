import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRendomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 2s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRendomQuote);
  const [randomcolor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRendomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div className="background" style={{ backgroundColor: randomcolor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomcolor, transition }}>
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href="https://twitter.com/intent/tweet?"
            id="tweet-quote"
            style={{
              backgroundColor: randomcolor,
              marginRight: "10px",
              transition,
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomcolor, transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
      {/* Footer placed directly below the quote box */}
      <footer id="footer">
        by{" "}
        <a
          href="https://codepen.io/Shafaat_Ali"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: randomcolor, transition}}
        >
          Shafaat
        </a>
      </footer>
    </div>
  );
}

export default App;
