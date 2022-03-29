import React from "react";
import Title from "../../components/title";
import Buttons from "./buttons/buttons";
import Forms from "./forms/forms";
import "./form_page.scss";
const FormPage = () => {
  return (
    <div className="col">
      <Title text={"Заповніть Форму"} />
      <Buttons />
      <Forms />
    </div>
  );
};
export default FormPage;
