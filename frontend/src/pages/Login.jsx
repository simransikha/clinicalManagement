import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex  items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl border text-zinc-600 text-sm shadow-lg">
        <p className=" text-2xl  font-semibold ">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="">
          Please {state === "Sign Up" ? "sign up" : "log in"} to Book
          Appointment{" "}
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.name)}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p> Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.email)}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.password)}
            required
          />
        </div>
        <button
          className="bg-primary text-white w-full py-2 rounded-md text-base"
          onClick={handleSubmit}
        >
          {state === "Sign Up" ? "Create Account" : "LogIn"}
        </button>
        <p
          className="mt-2 text-sm"
          onClick={() => setState(state === "Sign Up" ? "Log In" : "Sign Up")}
        >
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-primary underline cursor-pointer"
              >
                Log In
              </span>
            </p>
          ) : (
            <p>
              Create an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-primary underline cursor-pointer"
              >
                {" "}
                Login Here
              </span>
            </p>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
