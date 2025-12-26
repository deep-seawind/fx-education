import { createContext, useContext, useEffect, useState } from "react";

const TradingContext = createContext();

const roundToTwo = (num) => {
  // Math.round(num * 100) / 100 is more reliable than toFixed for calculations
  return Math.round(num * 100) / 100;
};

export const TradingProvider = ({ children }) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [balance, setBalance] = useState(25000);
  const [position, setPosition] = useState(0);
  const [entryPrice, setEntryPrice] = useState(null);
  const [trades, setTrades] = useState([]);

  // Fetch real price periodically
useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=9X5887KWY3RFJ7GM`
        );
        const data = await res.json();

        if (data["Global Quote"] && data["Global Quote"]["05. price"]) {
          const price = Number(data["Global Quote"]["05. price"]);
          setCurrentPrice(roundToTwo(price)); // Round fetched price safely
        }
      } catch (err) {
        console.error("Price fetch error:", err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Safer: every 60s to respect free tier limits
    return () => clearInterval(interval);
  }, []);


  const buy = (qty) => {
    if (!qty || currentPrice <= 0) return;
    const cost = qty * currentPrice;
    if (cost > balance) return alert("Insufficient balance");

    setBalance(balance - cost);
    setPosition(position + qty);
    setEntryPrice(currentPrice);

    setTrades([...trades, {
      type: "BUY",
      qty,
      price: currentPrice,
      time: new Date().toLocaleTimeString(),
    }]);
  };

  const sell = (qty) => {
    if (!qty || qty > position) return alert("Invalid quantity");

    const revenue = qty * currentPrice;
    setBalance(balance + revenue);
    setPosition(position - qty);

    setTrades([...trades, {
      type: "SELL",
      qty,
      price: currentPrice,
      time: new Date().toLocaleTimeString(),
    }]);
  };

  const unrealizedPnL =
    position > 0 ? (currentPrice - entryPrice) * position : 0;

  return (
    <TradingContext.Provider
      value={{
        currentPrice,
        balance,
        position,
        entryPrice,
        trades,
        buy,
        sell,
        unrealizedPnL,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export const useTrading = () => useContext(TradingContext);
