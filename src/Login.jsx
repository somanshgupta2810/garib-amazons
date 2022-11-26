import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

function Login() {
  function callLoginApi(values) {
    console.log("email is", values.email, values.password);
  }
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(5),
  });
  const { handleSubmit, values, handleChange, resetForm } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center w-full h-screen bg-gray-300 place-items-center"
    >
      <div className="flex flex-col p-10 bg-white rounded-lg">
        <h1 className="my-5 text-3xl font-extrabold">Login To Garib-Amazon</h1>
        <input
          className="h-10 border-2"
          placeholder="Enter The Email Address"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          type="email"
        />
        <input
          className="h-10 border-2 hover:border-red-500"
          placeholder="Enter The Password"
          onChange={handleChange}
          value={values.password}
          name="password"
          id="password"
          type="password"
        />
        <button
          className="mt-8 text-2xl text-white bg-purple-600 hover:bg-orange-600"
          type="submit"
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
