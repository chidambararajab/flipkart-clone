import React, { useRef } from "react";
import "./Login.css";

const LoginModel = ({ showLoginModel, setShowLoginModel }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowLoginModel(false);
    }
  };

  return (
    <>
      {showLoginModel ? (
        <div className="backgroundModule" onClick={closeModal} ref={modalRef}>
          <div className="moduleWrapper" showLoginModel={showLoginModel}>
            <div className="loginPage__leftModule">
              <div className="login">
                <div className="login__rightSide-content">
                  <h2>Login</h2>
                  <p>
                    Get access to your Orders, <br />
                    Wishlist and Recommendations
                  </p>
                </div>
              </div>
            </div>
            <div className="loginPage__rightModule">
              <div className="login">
                <div className="login__container">
                  <form>
                    <input
                      type="text"
                      placeholder="Enter Email / Mobile number"
                    />

                    <input type="password" placeholder="Enter Password" />
                    <button
                      type="submit"
                      className="login__signInButton boxshadow__style"
                    >
                      Login
                    </button>
                    <div class="separator">or</div>

                    <button className="login__registerButton boxshadow__style">
                      Request OTP
                    </button>

                    <div className="login__createAccount">
                      <a className="login__createAccount-link" href="">
                        New to Flipkart? Create an account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LoginModel;
