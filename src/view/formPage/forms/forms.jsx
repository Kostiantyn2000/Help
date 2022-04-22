import React from "react";
import { useForm } from "react-hook-form";
import * as error from "../../../utils/formErrors";
import "./forms.scss";
const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="  form-container">
        <div className=" block-inputs">
          <div className="inputs-name mg-bt">
            <label htmlFor="firstName" className="label-text">
              Ім'я
              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                name="firstName"
                className="input-firstName"
              />
              {error.errorFirstName(errors)}
            </label>
            <label htmlFor="lastName" className="label-text">
              Фамілія
              <input
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="input-lastName"
                name="lastName"
              />
              {error.errorLastName(errors)}
            </label>
          </div>

          <label htmlFor="nameCompany" className="label-text ">
            Назва Компанії,організації
            <div className="inputs-company">
              <input
                {...register("nameCompany", { required: true })}
                name="nameCompany"
                className="input-company"
              />

              <input className="file-input" type="file" />
            </div>
            {error.errorNameCompany(errors)}
          </label>

          <label htmlFor="email" className="label-text">
            Email-адрес
            <input
              type="email"
              {...register("email", {
                required: "Email is require field ",
                pattern: {
                  value:
                    '/^(?!(?>"?(?>\\[ -~]|[^"])"?){255,})(?!"?(?>\\[ -~]|[^"]){65,}"?@)(?>([!#-\'*+/-9=?^-~-]+)(?>.(?1))*|"(?>[ !#-[]-~]|\\[ -~])*")@(?!.*[^.]{64,})(?>([a-z0-9](?>[a-z0-9-]*[a-z0-9])?)(?>.(?2)){0,126}|[(?:(?>IPv6:(?>([a-f0-9]{1,4})(?>:(?3)){7}|(?!(?:.*[a-f0-9][:]]){8,})((?3)(?>:(?3)){0,6})?::(?4)?))|(?>(?>IPv6:(?>(?3)(?>:(?3)){5}:|(?!(?:.*[a-f0-9]:){6,})(?5)?::(?>((?3)(?>:(?3)){0,4}):)?))?(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(?>.(?6)){3}))])$/iD',
                },
              })}
              name="email"
              className="input-email"
            />
            {error.errorEmail(errors)}{" "}
          </label>
          <label htmlFor="phone" className="label-text  ">
            Номер Телефону
            <input
              type="tel"
              {...register("phone", {
                required: true,
                maxLength: 15,
              })}
              className="input-tel"
            />
            {error.errorPhone(errors)}{" "}
          </label>
        </div>
        <div className="block-inputs ">
          <label htmlFor="country" className="label-text">
            Країна
            <input
              type="text"
              {...register("country", {
                required: true,
              })}
              name="country"
              className="input-country"
            />
            {error.errorCountry(errors)}
          </label>{" "}
          <div className="inputs-live">
            <label htmlFor="city" className="label-text">
              Місто
              <input
                type="text"
                {...register("city", {
                  required: true,
                })}
                name="city"
                className="input-city"
              />
              {error.errorCity(errors)}
            </label>

            <label htmlFor="street" className="label-text">
              Штат,район
              <input
                type="text"
                {...register("street", {
                  required: true,
                })}
                name="street"
                className="input-street"
              />
              {error.errorStreet(errors)}
            </label>
          </div>
          <label htmlFor="address" className="label-text">
            Адреса
            <input
              type="text"
              {...register("address", {
                required: true,
              })}
              name="address"
              className="input-emailCode"
            />
            {error.errorAddress(errors)}
          </label>
          <label htmlFor="emailCode" className="label-text">
            Поштовий індекс
            <input
              type="text"
              {...register("emailCode", {
                required: true,
                maxLength: 5,
              })}
              name="emailCode"
              className="input-emailCode"
            />
            {error.errorEmailIndex(errors)}
          </label>
        </div>
      </form>
    </div>
  );
};

export default Forms;
