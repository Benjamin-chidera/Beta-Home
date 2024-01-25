import House from "../../assets/images/House.png";
import "../../styles/Admin Styles/signupform.css";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="d-flex justify-content-center sign-in vh-100">
      <div className="input-field bg-light p-3 p-md-5 col-md-6">
        <div className="header lh-1 mb-4 text-center text-md-start">
          <p className="text fw-bold ">Create an admin account.</p>
          <p>Lets get started by filling out the information below</p>
        </div>
        <form className="inputs ">
          <div className="mb-3">
            <label htmlFor="email1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="mickietyronne@gmail.com"
              id="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password1" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          <button
            type="button"
            className="btn btn-success text-center w-100 btn-lg"
          >
            Sign up
          </button>
        </form>
        <p className="text-center pt-3 fw-bold">or</p>
        <button type="button" className="btn btn-outline-success w-100 mb-3">
          <img src={search} alt="" className="google-icon px-2 pb-1" />
          Continue with Google
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/admin/login" className="fw-bold text-success">
            Sign in
          </Link>
        </p>
      </div>
      <img
        src={House}
        alt="House Image"
        className=" w-50 rounded-left d-none d-md-block "
      />
    </div>
  );
};

export default SignupForm;
