import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../redux/actions/userActions";
import MessageBox from "../messageBox/messageBox";
import "./index.css";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  console.log(userInfo, error);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      window.location.href = "/";
    }
  }, [props.history, userInfo]);
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <h3>Welcome back</h3>

        <input
          placeholder="Email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="forgot-password">
          <a href="/reset-password">Forgot Password?</a>
        </span>
        <button type="submit">Sign In</button>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <p className="note">Demo email: demo@betsoftware.com</p>
        <p className="note">password: demo@123</p>
      </form>
    </div>
  );
}
