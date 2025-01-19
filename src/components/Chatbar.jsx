import React from "react";
import feather from "../assets/images/feather.png";

const Chatbar = ({ value, setValue, getResponse, error, clear }) => {
  return (
    <div className="input-container">
      <input
        value={value}
        placeholder="How to find peace?"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && getResponse()}
      />
      <button onClick={error ? clear : getResponse}>
        {error ? "Clear" : "Ask Kanha "}
        <img
          src={feather}
          alt="feather"
          style={{ marginLeft: "0.5rem", height: "1rem" }}
        />
      </button>
    </div>
  );
};

export default Chatbar;
