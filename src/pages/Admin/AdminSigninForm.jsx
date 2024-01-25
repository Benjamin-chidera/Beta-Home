import "bootstrap/dist/css/bootstrap.min.css";
import House from "../../assets/images/House.png";
import "../../styles/Admin Styles/signupform.css";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <div className="d-flex justify-content-center vh-100 w-100">
      <div className="input-field bg-light p-3 p-md-5 col-md-6 col-12 ">
        <div className="header lh-1 mb-4 text-center text-md-start">
          <p className="text fw-bold ">Sign in to your admin account.</p>
          <p>Enter your details to access your account</p>
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
            <div className="password-field">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <span className="text-danger">Forgot Password?</span>
            </div>
            <input type="password" className="form-control" id="password" />
          </div>

          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label " htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="btn btn-success text-center w-100 btn-lg"
          >
            Sign in
          </button>
        </form>
        <p className="text-center pt-3 fw-bold">or</p>
        <button type="button" className="btn btn-outline-success w-100 mb-3">
          <img src={search} alt="" className="google-icon px-2 pb-1" />
          Continue with Google
        </button>
        <p>
          New user?{" "}
          <Link to="/admin/signup" className="fw-bold text-success">
            Sign up
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

export default SigninForm;
