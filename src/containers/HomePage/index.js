import React from 'react';
import './style.css';
import Layout from './../../components/Layout/index';

const HomePage = (props) => {
  return (
   <Layout>
        <section className="container">
    <div className="listOfUsers">

        <div className="displayName">
            <div className="displayPic">
                <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', flex:1, margin: '0 10px'}}>
                <span style={{fontWeight: 500}}>Kalpesh Gehlot</span>
                <span>online</span>
            </div>
        </div>
                
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