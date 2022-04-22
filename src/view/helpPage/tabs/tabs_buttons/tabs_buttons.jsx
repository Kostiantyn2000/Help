import React from "react";
import "./tabs_buttons.scss";
import SvgClothes from "../../../../assets/svg/clothes";
import SvgHeart from "../../../../assets/svg/heart";
import SvgHand from "../../../../assets/svg/hand";
import SvgWallet from "../../../../assets/svg/wallet";
const TabsButtons = ({ toggleState, toggleTab }) => {
  return (
    <div className="block-tabs">
      <div className="tab-container">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <SvgHand active={toggleState} />
        </button>
        <p className={toggleState === 1 ? "tab-text active" : "tab-text"}>
          Зробити
        </p>
      </div>
      <div className="tab-container">
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <SvgWallet active={toggleState} />
        </button>

        <p className={toggleState === 2 ? "tab-text active" : "tab-text"}>
          Фінансова <br /> допомога
        </p>
      </div>
      <div className="tab-container">
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <SvgClothes active={toggleState} />
        </button>
        <p className={toggleState === 3 ? "tab-text active" : "tab-text"}>
          Матеріальна <br /> допомога
        </p>
      </div>
      <div className="tab-container">
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          <SvgHeart active={toggleState} />
        </button>
        <p className={toggleState === 4 ? "tab-text active" : "tab-text"}>
          Волонтерство
        </p>
      </div>
    </div>
  );
};

export default TabsButtons;
