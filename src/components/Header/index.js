import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import {userLogout} from "../../actions"

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // const logout = () => {
  //   e.preventDefault();
  //   dispatch(logout())
  // }
  

  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <div className="logo">Web Messenger</div>
       { auth.authenticated ? '' : 
        <ul className="leftMenu">
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Sign up</NavLink>
        </li>
      </ul>
      }
      </div>
      <div style={{ margin: "20px 0", color: "#fff", fontWeight: "bold" }}>
        {auth.authenticated ? `Hi ${auth.firstName } ${auth.lastName}` : null}
      </div>
      <ul className="menu">
        {!auth.authenticated ? null :
        <li>
        <Link to={"#"} onClick={() => {
          dispatch(userLogout())
        }}>
          Logout
        </Link>
      </li>
      }
      </ul>
    </header>
  );
};

export default Header;
