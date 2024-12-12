const { useState, useEffect } = React;

const App = () => {
  const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens while you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
  ];

  const colors = ["#6f42c1", "#fd7e14", "#198754", "#dc3545", "#0d6efd"];
  
  const [currentQuote, setCurrentQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState("#f8f9fa");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
    setTimeout(() => {
      setCurrentQuote(quotes[randomIndex]);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: backgroundColor }} className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div id="quote-box" className="container p-4">
        <p id="text" style={{ color: backgroundColor }}>{currentQuote.text}</p>
        <p id="author" style={{ color: backgroundColor }}>{currentQuote.author && `- ${currentQuote.author}`}</p>
        <button
          id="new-quote"
          className="btn btn-primary"
          onClick={getRandomQuote}
        >
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${currentQuote.text}" - ${currentQuote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
