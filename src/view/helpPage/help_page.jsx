import React from "react";
import Title from "../../components/title";
import Tabs from "./tabs/tabs";
import "./help_page.scss";
const HelpPage = () => {
  return (
    <div className="col">
      <Title text={"Види Допомоги"} />
      <p className="text">Ви можете змінити вид допомоги</p>
      <Tabs />
      <button class="btn btn-help" type="button">
        Допомогти
      </button>
    </div>
  );
};

export default HelpPage;
