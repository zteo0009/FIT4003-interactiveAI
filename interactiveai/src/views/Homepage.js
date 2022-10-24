import React, { useState } from "react";
import { motion } from 'framer-motion';
import '../assets/styles.css'
import Popup from '../components/Popup';
import UserSelectionPopup from '../components/UserSelectionPopup';

function Homepage() {

    const [showPopUp, setShowPopUp] = useState(false);
    const [showUserPopUp, setShowUserPopUp] = useState(false);
    const routeChange = () => {
        setShowPopUp(true);
    }

    return (
        <>
            <Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp} setShowUserPopUp={setShowUserPopUp} />
            <UserSelectionPopup showUserPopUp={showUserPopUp} setShowUserPopUp={setShowUserPopUp}/>
            <img className="fixed right-0" src={require('../images/top-right-sphere.png')} alt="" />
            <img className="fixed bottom-0 right-0 w-500" src={require('../images/bottom-sphere.png')} alt="" />
            <img className="fixed left-0" src={require('../images/top-blob.png')} alt="" />
            <img className="fixed bottom-0 right-50" src={require('../images/bottom-blob.png')} alt="" />

            <motion.div className="min-h-screen text-black" style={{ alignItems: 'center' }} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>

                <div className="flex h-screen justify-center items-center space-x-10 ">
                    <div className="max-w-xl">
                        <h3>Welcome to our</h3>
                        <h1>AI ETHICS QUIZ</h1>
                        <p>Are YOU interested in understanding the limits of your AI ethics knowledge? </p>
                        <button
                            type="submit"
                            value="Let's start!"
                            name="member[submit]"
                            id="member_submit"
                            className="start-btn"
                            onClick={routeChange}>Let's start!</button>
                    </div>
                    <div className="empty"></div>

                    {showPopUp || showUserPopUp
                        ? <div className="robot-hand-background">
                            <img src={require('../images/robot-arm.png')} alt="" />
                        </div>
                        : <div className="robot-hand">
                            <img src={require('../images/robot-arm.png')} alt="" />
                        </div>
                    }

                </div>


            </motion.div>
        </>

    );
}

export default Homepage
