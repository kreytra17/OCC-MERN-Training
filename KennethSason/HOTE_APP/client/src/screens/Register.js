import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const register = async () => {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        setLoading(true);
        const result = (await axios.post("/api/users/register", user)).data;
        setLoading(false);
        setSuccess(true);
        console.log(result);
        setName("");
        setEmail("");
        setPassword("");
        setcPassword("");
      } catch (e) {
        setLoading(false);
        setError(true);
        console.log(e);
      }
    } else {
      alert("password not match");
    }
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {success && <Success message="Successfully Registered" />}
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
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
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              onChange={(e) => {
                setcPassword(e.target.value);
              }}
              value={cpassword}
            />
            <button className="btn btn-primary mt-3" onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
