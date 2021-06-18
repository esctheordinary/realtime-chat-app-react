import firebase from "firebase/app";
import "firebase/auth";
import {authConstants} from './constants'



export const signup = (user) => {
  return async (dispatch) => {
    dispatch({
        type: `${authConstants.USER_LOGIN}_REQUEST`
    })
    const auth = firebase.auth();
const db = firebase.firestore();
    auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        const currentUser = auth.currentUser;
        const name = `${user.firstname} ${user.lastname}`;
        currentUser
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            db.collection("users")
              .add({
                firstName: user.firstname,
                lastName: user.lastname,
                uid: data.user.uid,
                createdAt: new Date(),
              })
              .then(() => {
                const loggedInUser = {
                  firstName: user.firstname,
                  lastName: user.lastname,
                  uid: data.user.uid,
                  email: user.email,
                };
                localStorage.setItem("User", JSON.stringify(loggedInUser));
                dispatch({
                    type: `${authConstants.USER_LOGIN}_SUCCESS`,
                    payload: {user: loggedInUser}
                })
              })
              .catch((err) => {
                dispatch({
                    type: `${authConstants.USER_LOGIN}_FAILURE`,
                    payload: {
                      error: err.message
                    }
                })
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const signin = (user) => {
  return async (dispatch) => {
    dispatch({
      type: `${authConstants.USER_LOGIN}_REQUEST`
    })
    const auth = firebase.auth();
    const db = firebase.firestore();
    auth.signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      const name = data.user.displayName.split(" ");
      const firstName = name[0];
      const lastName = name[1];
      const loggedInUser = {
        firstName,
        lastName,
        uid: data.user.uid,
        email: data.user.email,
      };
      localStorage.setItem('User', JSON.stringify(loggedInUser))
      dispatch({
        type: `${authConstants.USER_LOGIN}_SUCCESS`,
        payload: {
          user:loggedInUser
        }
      })
    })
    .catch((err) => {
      dispatch({
        type: `${authConstants.USER_LOGIN}_FAILURE`,
        payload: {
          error: err.message
        }
      })
    })
  }
}

export const loggedInUser = () => {
  return (dispatch) => {
    const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : null;
    if(user){
      dispatch({
        type: `${authConstants.USER_LOGIN}_SUCCESS`,
        payload: {
          user
        }
      })
    }else{
      dispatch({
        type: `${authConstants.USER_LOGIN}_FAILURE`,
        payload: {
          error: "Please log in again"
        }
      })
    }
  }
}

export const userLogout = () => {
  return (dispatch) => {
    dispatch({
      type: `${authConstants.USER_LOGOUT}_REQUEST`
    });
    const auth = firebase.auth();
    auth.signOut()
    .then(() => {
      localStorage.clear();
      dispatch({
        type: `${authConstants.USER_LOGOUT}_SUCCESS`,
      })
    })
    .catch((err) => {
      dispatch({
        type: `${authConstants.USER_LOGOUT}_FAILURE`,
        payload: {err}
      })
    })
  }
}