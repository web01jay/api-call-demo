import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { loginSchema } from "../axios/helper";

export const Login = () => {
  // State declaration
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    async onSubmit(values) {
      console.log(values, `values`)
      setIsSubmitting(true);
      axios.post(`https://reqres.in/api/login`, {
        email: values.email,
        password: values.password
      }).then(async (response) => {
        console.log(response, `res`)
        if(response.data){
          localStorage.setItem(
            'access_token', response.data.token
          )
        }
      }).catch((err) => {
        console.log(err, `err`)
      })
      
      setIsSubmitting(false);
    },
  });
  return (
    <div className="login-page">
      <div className="h-100 w-100 d-flex align-items-center justify-content-center">
        {isSubmitting === true ? `Submitting` :
        <form
          className="text-start"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={(errors.email && touched.email ? "input-error" : null) + " form-control"}
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
              className={(errors.email && touched.email ? "input-error" : null) + " form-control"}
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
        </form>}
      </div>
    </div>
  );
};
