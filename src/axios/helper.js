import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    // .trim()
    .required("Please enter Email")
    .email("Please enter valid Email")
    .max(50, `Maximum length for Email should be 50 characters`)
    .matches(/^\S*$/, "Please enter valid Email"),
  password: Yup.string()
    .required("Please enter Password")
    .min(6, "Password is too short"),
});