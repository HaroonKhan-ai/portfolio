import { useState } from "react";
import "./converter.css";

export default function CurrencyConverter() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [input, setInput] = useState(0);

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const converted = (Number(input) * rates[to]) / rates[from];

  return (
    <div className="converterContainer">
      <div className="card">
        <h1 className="title">Currency Converter</h1>

        <input
          className="input"
          type="number"
          value={input}
          placeholder="Enter amount"
          onChange={(e) => setInput(Number(e.target.value))}
        />

        <div className="row">
          <div className="group">
            <label>From</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </div>

          <div className="group">
            <label>To</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </div>
        </div>

        <div className="result">
          {converted.toFixed(2)} {to}
        </div>
      </div>
    </div>
  );
}
