import React from "react";

function Signup() {
  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center">

        {/* Left side image */}
        <div className="col-md-6 text-center">
          <img
            src="/media/images/signup.png"
            alt="Signup"
            style={{ maxWidth: "80%" }}
          />
        </div>

        {/* Signup form */}
        <div className="col-md-5">
          <h1 className="mb-3">Open a Zerodha account</h1>

          <p className="text-muted">
            Start investing in stocks, mutual funds, and more.
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign Up
            </button>
          </form>

          <p className="text-muted small mt-3">
            By signing up, you agree to our terms and conditions.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;