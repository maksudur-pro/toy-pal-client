import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className="hero-content my-container flex-col">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="input input-bordered"
            />
            <label className="label">
              <div className="label-text-alt">
                Dont’t Have An Account ?{" "}
                <Link className="link" to="/register">
                  Register
                </Link>
                {/* <p className="text-red-500">{error}</p> */}
              </div>
            </label>
          </div>
          <div className="form-control mt-6 gap-2">
            <button className="btn btn-primary">Login</button>
            <p className="text-center font-bold">OR</p>
          </div>
        </form>
        <button className="btn btn-outline">
          <FaGoogle className="mx-2 text-blue-500" /> Login with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
