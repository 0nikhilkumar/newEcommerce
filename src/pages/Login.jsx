import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [email, setEmail] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    });
    const response = await res.json();
    console.log(response);

    if (res.status === 400 || !response) {
      window.alert("Invalid Credentials");
    } else {
      // dispatch({ type: "USER", payload: true });
      localStorage.setItem("token", response.token);
      if (localStorage.getItem("token")) {
        window.alert("User signin successfully");
        navigate("/home");
      }
      setIsLogin(!isLogin);
    }
  };

  return (
    <>
      {isLogin ? <Navbar isLogin={isLogin}/> : <></>}
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="display-4">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter your username"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info">
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={loginUser}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
