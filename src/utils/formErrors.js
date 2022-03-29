export const errorFirstName = (errors) => {
  const error =
    (errors?.firstName?.type === "required" && (
      <p style={{ color: "red" }}>Fill in the fields Name</p>
    )) ||
    (errors?.firstName?.type === "maxLength" && (
      <p style={{ color: "red" }}>First name cannot exceed 20 characters</p>
    )) ||
    (errors?.firstName?.type === "pattern" && (
      <p>Alphabetical characters only</p>
    ));
  return error;
};

export const errorLastName = (errors) => {
  const error =
    (errors?.lastName?.type === "pattern" && (
      <p style={{ color: "red" }}>Alphabetical characters only</p>
    )) ||
    (errors?.lastName?.type === "required" && (
      <p style={{ color: "red" }}>Fill in the fields lastName</p>
    ));
  return error;
};

export const errorNameCompany = (errors) => {
  const error = errors?.nameCompany && (
    <p style={{ color: "red" }}>You did not enter a company name </p>
  );
  return error;
};

export const errorFileCompany = (errors) => {
  const error = errors?.file && (
    <p style={{ color: "red" }}>add your company logo </p>
  );
  return error;
};

export const errorEmail = (errors) => {
  const error =
    (errors?.email?.type === "pattern" && (
      <p style={{ color: "red" }}>Not the correct mail</p>
    )) ||
    (errors?.email?.type === "required" && (
      <p style={{ color: "red" }}>Enter your mail</p>
    ));
  return error;
};

export const errorPhone = (errors) => {
  const error = errors?.phone?.type === "maxLength" && (
    <p style={{ color: "red" }}>You did not enter your number</p>
  );
  return error;
};

export const errorCountry = (errors) => {
  const error = errors?.country?.type === "required" && (
    <p style={{ color: "red" }}>You did not enter your country</p>
  );
  return error;
};

export const errorCity = (errors) => {
  const error = errors?.city?.type === "required" && (
    <p style={{ color: "red" }}>You not did enter your City</p>
  );
  return error;
};

export const errorStreet = (errors) => {
  const error = errors?.street?.type === "required" && (
    <p style={{ color: "red" }}>You not did enter your street</p>
  );
  return error;
};

export const errorEmailIndex = (errors) => {
  const error =
    (errors?.emailCode?.type === "required" && (
      <p style={{ color: "red" }}>You not did enter your email index</p>
    )) ||
    (errors?.emailCode?.type === "maxLength" && (
      <p style={{ color: "red" }}>You wrote too many characters max 5</p>
    ));
  return error;
};

export const errorAddress = (errors) => {
  const error = errors?.address?.type === "required" && (
    <p style={{ color: "red" }}>You not did enter your address index</p>
  );
  return error;
};
