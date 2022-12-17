import React, { useState, useEffect } from "react";

function Quote() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  /* Changes quote everytime the page is refreshed */
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote">
      <h3>{quotes.text}</h3>
      <h4>-- {quotes.author}</h4>
    </div>
  );
}

export default Quote;
