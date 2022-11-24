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
      className="flex h-screen w-full justify-center place-items-center bg-gray-300"
    >
      <div className="flex flex-col bg-white p-10 rounded-lg">
        <h1 className="text-3xl font-extrabold my-5">Login To Garib-Amazon</h1>
        <input
          className="h-10 border-2"
          placeholder="Enter The Email Address"
          onChange={handleEmailChange}
          type="email"
        />
        <input
          className="h-10 border-2"
          placeholder="Enter The Password"
          onChange={handlePasswordChange}
          type="password"
        />
        <button className="text-2xl bg-purple-600 text-white mt-8">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
