import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signin } from "../../actions/auth.action";
import Layout from "./../../components/Layout";
import Card from './../../components/UI/Card';
import "./style.css";

/**
 * @author
 * @function Login
 **/

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const loginUser = (e) => {
    e.preventDefault();
    if(email === ""){
      alert("Email is required")
      return;
    }
    if(password === ""){
      alert("Password is required")
      return;
    }
    const user = {
      email, password
    }
    dispatch(signin(user))
  }

  if(auth.authenticated){
    return <Redirect to={'/'}/>
  }

  return (
    <div>
      <Layout>
        <div className="loginContainer">
          <Card>
            <form onSubmit={loginUser}>
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
              <input
                name="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <button>Login</button>
            </form>
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
