import React from "react";
import "./buttons.scss";
const Buttons = () => {
  return (
    <div
      className="btn-group flex-btn"
      role="group"
      aria-label="Basic outlined example"
    >
      <button type="button " className="btn btn-outline-dark ">
        Фіз.особа
      </button>
      <button type="button" className="btn btn-outline-dark">
        Юр.особа
      </button>
    </div>
  );
};

export default Buttons;
