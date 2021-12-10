import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { formPostSchema } from "../axios/helper";
import { toast } from "react-toastify";

const FormPost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      userId: "",
      postTitle: "",
      postBody: "",
    },
    validationSchema: formPostSchema,
    onSubmit(values) {
      setIsSubmitting(true);
      console.log(values);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          userId: userId,
          id: "11",
          title: postTitle,
          body: postBody,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setIsSubmitting(false);
    },
  });

  useEffect(() => {
    console.log(errors);
    console.log(touched);
  }, [errors,touched]);

  return (
    <>
      {isSubmitting === true ? (
        <div className="my-5">Submiting</div>
      ) : (
        <>
          <div className="container my-5">
            <form onSubmit={handleSubmit} className="custom-from">
              <div className="row justify-content-center">
                <div className="col-md-2">
                  <div className="form-group mb-3 mb-md-4">
                    <label htmlFor="userId">User Id</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setFieldTouched("userId", true);
                        handleChange(e);
                      }}
                      value={values.userId}
                      className={
                        (errors.userId && touched.userId
                          ? "input-error"
                          : null) + " form-control"
                      }
                      name="userId"
                    />
                    {errors.userId && touched.userId && <div>{errors.userId}</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3 mb-md-4">
                    <label htmlFor="postTitle">Post Title</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setFieldTouched("postTitle", true);
                        handleChange(e);
                      }}
                      value={values.postTitle}
                      className={
                        (errors.postTitle && touched.postTitle
                          ? "input-error"
                          : null) + " form-control"
                      }
                      name="postTitle"
                    />
                    {errors.postTitle && touched.postTitle && <div>{errors.postTitle}</div>}
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3 mb-md-4">
                    <label htmlFor="postBody">Post Body</label>
                    <textarea
                      type="text"
                      onChange={(e) => {
                        setFieldTouched("postBody", true);
                        handleChange(e);
                      }}
                      value={values.postBody}
                      className={
                        (errors.postBody && touched.postBody
                          ? "input-error"
                          : null) + " form-control"
                      }
                      name="postBody"
                    >
                      {" "}
                    </textarea>
                    {errors.postBody && touched.postBody && <div>{errors.postBody}</div>}
                  </div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default FormPost;
