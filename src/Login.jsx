import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";

function Login() {
  function callLoginApi(values) {
    console.log("email is", values.email, values.password);
  }
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().min(10).required(),
  });
  const {
    handleSubmit,
    values,
    handleChange,
    resetForm,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
    validateOnMount: true,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center w-full h-screen bg-gray-300 place-items-center"
    >
      <div className="flex flex-col p-10 bg-white rounded-lg">
        <h1 className="my-5 text-3xl font-extrabold">Login To Garib-Amazon</h1>
        <div>
          <Input
            placeholder="Enter The Email Address"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
            type="email"
            onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
            required
          />
        </div>
        <div>
          <Input
            placeholder="Enter The Password"
            onChange={handleChange}
            value={values.password}
            name="password"
            id="password"
            type="password"
            onBlur={handleBlur}
            touched={touched.password}
            error={errors.password}
            required
          />
        </div>

        <button
          className="mt-8 text-2xl text-white bg-purple-600 hover:bg-orange-600 disabled:bg-purple-300"
          type="submit"
          disabled={!isValid}
        >
          Login
        </button>
        <button
          className="mt-8 text-2xl text-white bg-purple-600 hover:bg-orange-600"
          onClick={resetForm}
          type="button"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default Login;
