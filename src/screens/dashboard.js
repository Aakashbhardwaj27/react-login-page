import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../redux/actions/userActions";
import "./index.css";
export default function Dashboard() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const signoutHandler = () => {
    dispatch(signout());
  };
  const { userInfo } = userSignin;
  return (
    <div className="dashboard">
      <div className="welcome">Welcome {userInfo.username}!!</div>
      <div className="note">
        <p>
          If you want to Sign out ,simply click on the top right icon and you
          will see a dropdown to signout button
        </p>
        <p>OR</p>
        <p className="note">Alternatively,click below</p>
        <button
          onClick={() => {
            signoutHandler();
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
