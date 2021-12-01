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

export const formPostSchema = Yup.object().shape({
  userId: Yup.number().required("Please Enter User Id").max(2, "Maximum 2 Numbers are allowed"),
  postTitle: Yup.string().required("Please Enter Post Title").max(50, "Maximum 50 Characters are allowed"),
  postBody: Yup.string().required("Please Enter Post Body").max(200, "Maximum 200 characters are allowed"),
});