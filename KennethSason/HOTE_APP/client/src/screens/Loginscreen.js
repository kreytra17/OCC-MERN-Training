import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Loginscreen = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  // const [cpassword, setcPassword] = useState("");
  const login = async () => {
    const user = {
      email,
      password,
    };
    console.log(user);
    try {
      setLoading(true);
      const result = (await axios.post("/api/users/login", user)).data;
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(result));
      window.location.href = "/home";
      console.log(result, "===> this from the database");
    } catch (e) {
      setError(true);
      setLoading(false);
      console.log(e);
    }
    console.log(user);
  };
  return (
    <div>
      {loading && <Loader />}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {error && <Error message="Invalid details" />}
          <div className="bs">
            <h2>Login</h2>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button className="btn btn-primary mt-3" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
