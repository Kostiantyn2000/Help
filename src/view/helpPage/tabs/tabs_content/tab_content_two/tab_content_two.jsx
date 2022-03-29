import React from "react";
import SvgMasterCard from "../../../../../assets/svg/mastercard";
import SvgVisa from "../../../../../assets/svg/visa";
import SvgTheTubeTerminal from "../../../../../assets/svg/the-tube-terminal";
import SvgWebmoney from "../../../../../assets/svg/webmoney";
import SvgPaypal from "../../../../../assets/svg/paypal";
import "./tab_content_two.scss";
const TabsContentTwo = ({ toggleState, toggleBtn, toggleStateBtn }) => {
  return (
    <div className={toggleState === 2 ? "content  active-content" : "content"}>
      <div className="content-flex">
        <div className="btn-container">
          <h4 className="title-btn">Спосіб Оплати</h4>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              onClick={() => toggleBtn(1)}
              className={
                toggleStateBtn === 1
                  ? "btn-active btn-style"
                  : "btn-offline btn-style"
              }
            >
              <div className="image-block">
                <SvgMasterCard active={toggleStateBtn} />
                <SvgVisa active={toggleStateBtn} />
              </div>

              <p className="btn_text">Карта Visa/MasterCard</p>
            </button>
            <button
              type="button"
              onClick={() => toggleBtn(2)}
              className={
                toggleStateBtn === 2
                  ? "btn-active btn-style"
                  : "btn-offline btn-style"
              }
            >
              <h5 className="btn_title btn-title-mg">Приват24</h5>
              <p className="btn_text">Приват24</p>
            </button>
            <button
              type="button"
              onClick={() => toggleBtn(3)}
              className={
                toggleStateBtn === 3
                  ? "btn-active btn-style"
                  : "btn-offline btn-style"
              }
            >
              <SvgTheTubeTerminal active={toggleStateBtn} />
              <p className="btn_text ">Термінали України</p>
            </button>
            <button
              type="button"
              onClick={() => toggleBtn(4)}
              className={
                toggleStateBtn === 4
                  ? "btn-active btn-style"
                  : "btn-offline btn-style"
              }
            >
              <SvgWebmoney active={toggleStateBtn} />
              <p className="btn_text">WebMoney</p>
            </button>
            <button
              type="button"
              onClick={() => toggleBtn(5)}
              className={
                toggleStateBtn === 5
                  ? "btn-active btn-style"
                  : "btn-offline btn-style"
              }
            >
              <SvgPaypal active={toggleStateBtn} />
              <p className="btn_text">PayPal</p>
            </button>
          </div>
        </div>
        <div className="card-container">
          <h4 className="title-card">Введіть наступні дані</h4>
          <div className="card">
            <label htmlFor="number-card" className="number-text number-text-mg">
              Номер Карти
              <div className="number-block number-text-mg">
                <input
                  type="text"
                  name="number-card"
                  className="number-input number-text-mg"
                />
                <input
                  type="text"
                  name="number-card"
                  className="number-input number-text-mg"
                />
                <input
                  type="text"
                  name="number-card"
                  className="number-input number-text-mg"
                />
                <input
                  type="text"
                  name="number-card"
                  className="number-input number-text-mg"
                />
              </div>
            </label>
            <div className="number-block">
              <label htmlFor="validity" className="number-text number-flex">
                Термін дії
                <input
                  type="text"
                  name="validity"
                  className="number-input-validity"
                />
              </label>
              <label htmlFor="number-cvv" className="number-text number-flex">
                CVC/CVV
                <input
                  type="text"
                  name="number-cvv"
                  className="number-input-cvv"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContentTwo;
