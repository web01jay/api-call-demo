import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { loginSchema } from "../axios/helper";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {setLoginAuthentication} from '../redux/actions/auth/auth.action';

export const Login = () => {

  const history = useHistory()
  const dispatch = useDispatch();

  // State declaration
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(()=> {
  //   toast("hello")
  // }, [])

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    async onSubmit(values) {
      console.log(values, `values`);
      setIsSubmitting(true);
      axios
        .post(`https://reqres.in/api/login`, {
          email: values.email,
          password: values.password,
        })
        .then(async (response) => {
          console.log(response, `res`);
          if (response.data) {
            localStorage.setItem("access_token", response.data.token);
          }
          dispatch(setLoginAuthentication(true))
          history.push("/after-login");
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.log(error, `err`);
          toast.error("User not found", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      setIsSubmitting(false);
    },
  });
  return (
    <div className="login-page">
      <div className="h-100 w-100 d-flex align-items-center justify-content-center">
        {isSubmitting === true ? (
          `Submitting`
        ) : (
          <form className="text-start" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={
                  (errors.email && touched.email ? "input-error" : null) +
                  " form-control"
                }
                aria-describedby="emailHelp"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email ? (
                <span className="error-text">{errors.email}</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={
                  (errors.email && touched.email ? "input-error" : null) +
                  " form-control"
                }
                id="password"
                onChange={handleChange}
                value={values.password}
                autoComplete="off"
              />
              {errors.password ? (
                <span className="error-text">{errors.password}</span>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div className="d-block mt-3">
              <code>
              <span className="text-center"> "email": "eve.holt@reqres.in"</span>
              <span className="text-center"> "password": "cityslicka"</span>
              </code>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
