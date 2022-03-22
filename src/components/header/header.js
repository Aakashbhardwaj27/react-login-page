import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/actions/userActions";
import "./header.css";
export default function Header() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const signoutHandler = () => {
    dispatch(signout());
  };
  const { userInfo } = userSignin;
  return (
    <header>
      <div className="header-left header-child logo">BET SOFTWARE</div>
      <div className="header-right header-child">
        {userInfo ? (
          <div className="dropdown">
            <span>
              {userInfo?.username}
              <button className="caret-down">V</button>
            </span>
            <ul className="dropdown-content">
              <li>
                <a
                  to="#signout"
                  onClick={() => {
                    signoutHandler();
                  }}
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <a href="/">Sign In</a>
        )}{" "}
      </div>
    </header>
  );
}
