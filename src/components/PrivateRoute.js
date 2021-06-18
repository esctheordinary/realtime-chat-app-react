import React from 'react';
import {Redirect, Route} from 'react-router-dom';

/**
* @author
* @function PrivateRoute
**/

const PrivateRoute = ({component: Component, ...rest}) => {
  return(
    <Route 
    {...rest}
    component = {(props)=>{
      const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : null;
      if(user){
        return <Component/>
      }else{
        return <Redirect to='/login'/>
      }
    }}
     />
   )

 }

export default PrivateRoute