import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
//import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div container-xxl>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                className="form-control"
                />
                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="form-control"
                />
                <input 
                type="tel" 
                name="mobile" 
                placeholder="Mobile Number" 
                className="form-control"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign Up
                    </button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
