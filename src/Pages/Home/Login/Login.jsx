import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import loginLottie from "../../../assets/loginAnimation.json";

const Login = () => {
  return (
    <div className="hero-content flex-col-reverse lg:flex-row">
      <div className="text-center lg:text-left lg:w-1/2">
        <Lottie
          className="h-1/2"
          animationData={loginLottie}
          loop={true}></Lottie>
      </div>
      <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <div className="card-body ">
          <h1 className="text-3xl text-center font-bold">Login now</h1>
          <form>
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
          <button className="btn btn-primary btn-outline btn-block">
            <FaGoogle className="mx-2 text-blue-500" /> Login with Google{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
