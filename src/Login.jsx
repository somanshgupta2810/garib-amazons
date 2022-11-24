import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  function callLoginApi(event) {
    event.preventDefault(),
      console.log("email is", email, "password is", password);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form
      onSubmit={callLoginApi}
      className="flex justify-center w-full h-screen bg-gray-300 place-items-center"
    >
      <div className="flex flex-col p-10 bg-white rounded-lg">
        <h1 className="my-5 text-3xl font-extrabold">Login To Garib-Amazon</h1>
        <input
          className="h-10 border-2"
          placeholder="Enter The Email Address"
          onChange={handleEmailChange}
          required
          type="email"
        />
        <input
          className="h-10 border-2 hover:border-red-500"
          placeholder="Enter The Password"
          onChange={handlePasswordChange}
          type="password"
          required
        />
        <button
          className="mt-8 text-2xl text-white bg-purple-600 hover:bg-orange-600"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
