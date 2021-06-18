import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loggedInUser } from "./actions";
import './App.css'
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(()=>{
    if(!auth.authenticated){
      dispatch(loggedInUser())
    }
  },[])
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
