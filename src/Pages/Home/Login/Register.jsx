import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import registerLottie from "../../../assets/registerAnimation.json";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        Swal.fire("Register Successfully!", " ", "success");
        navigate(from, { replace: true });
        updateUserData(result.user, name, photo);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero-content flex-col-reverse lg:flex-row-reverse">
      <div className="text-center lg:text-left lg:w-1/2">
        <Lottie
          className="h-1/2"
          animationData={registerLottie}
          loop={true}></Lottie>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center font-bold mt-4">Register now</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Enter url"
              className="input input-bordered"
            />
          </div>
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
                Already have an account?{" "}
                <Link className="link" to="/login">
                  Login
                </Link>
                <p className="text-red-500">{error}</p>
              </div>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
