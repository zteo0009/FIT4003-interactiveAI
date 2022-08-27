import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import '../assets/styles.css'

function Homepage() {

    const navigate = useNavigate();

    const routeChange = () =>{ 
        let path = '/questions'; 
        navigate(path);
    }

    return (
    <>
     <img className="fixed right-0" src={require('../images/top-right-sphere.png')} alt="" />
     <img className="fixed bottom-0 right-0 w-500" src={require('../images/bottom-sphere.png')} alt="" />
     <img className="fixed left-0" src={require('../images/top-blob.png')} alt="" />
     <img className="fixed bottom-0 right-50" src={require('../images/bottom-blob.png')} alt="" />
  
       <motion.div className="min-h-screen text-black" style={{alignItems: 'center' }} initial={{width : 0}} animate={{width : "100%"}} exit={{x : window.innerWidth, transition: {duration: 0.2}}}>
      
            <div className="flex h-screen justify-center items-center space-x-10 ">
                    <div className="max-w-xl">
                        <h3>Welcome to our</h3>
                        <h1>AI ETHICS QUIZ</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button
                            type="submit"
                            value="Let's start!"
                            name="member[submit]"
                            id="member_submit"
                            className="button"
                            onClick={routeChange}>Let's start!</button>
                    </div>
                    <div className="empty"></div>
             <div className="robot-hand">
                <img src={require('../images/robot-arm.png')} alt="" />
             </div>
            </div>      


        </motion.div>
        </>

       
    );
}

export default Homepage
