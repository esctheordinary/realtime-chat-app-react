import React, {useEffect} from 'react';
import './style.css';
import Layout from './../../components/Layout/index';
import { useDispatch, useSelector } from 'react-redux';
import { getRealTimeUser } from '../../actions/user.actions';

const User = (props) => {
    const {user} = props;
    return (
        <div key={user.uid} className="displayName">
            <div className="displayPic">
                <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', flex:1, margin: '0 10px'}}>
                <span style={{fontWeight: 500}}>{user.firstName} {user.lastName}</span>
                <span>{user.isOnline ? 'online' : 'offline'}</span>
            </div>
        </div>
    )
}

const HomePage = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const users = useSelector(state => state.user);
    let unsubscribe;

    useEffect(() => {
        unsubscribe = dispatch(getRealTimeUser(auth.uid))
        .then(unsubscribe => {
            return unsubscribe;
        })
    },[])

    useEffect(() => {
        return () => {
            unsubscribe.then(f => f()).catch((err) => console.log(err))
        }
    }, [])

  return (
   <Layout>
        <section className="container">
    <div className="listOfUsers">

        {users.users.length > 0 ? 
        users.users.map(user => {
            return (
                <User key={user.uid} user={user} />
    )}) : null}       
    </div>
    <div className="chatArea">
        <div className="chatHeader"> Kalpesh Gehlot </div>
        <div className="messageSections">

            <div style={{ textAlign: 'left' }}>
                <p className="messageStyle" >Hello User</p>
            </div>

        </div>
        <div className="chatControls">
            <textarea />
            <button>Send</button>
        </div>
    </div>
</section>
   </Layout>
  );
}

export default HomePage;