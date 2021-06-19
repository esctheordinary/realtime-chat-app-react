import firebase from "firebase/app";
import {userContants} from './constants'

export const getRealTimeUser = (uid) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("users")
      .onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          if(doc.data().uid !== uid){
            users.push(doc.data());
          }
        });
        dispatch({
            type: `${userContants.GET_REALTIME_USERS}_SUCCESS`,
            payload: {
                 users
            }
        })
      });
      return unsubscribe;
  };
};
