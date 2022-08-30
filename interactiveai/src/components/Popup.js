import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const popup = {
    hidden: {
        position: "relative",
        zIndex: '9999',
        y: "-100vh",
        opacity: 0
    },
    visible: {
        position: "relative",
        y: "20%",
        opacity: 1,
        transition: { delay: 0.5 },
        zIndex: '9999'
    },
}

const Popup = ({ showPopUp, setShowPopUp }) => {

    const canBeSubmitted = (input) => {
        
        if (input){
            document.getElementById("proceedBtn").removeAttribute("disabled")
        } else {
            document.getElementById("proceedBtn").setAttribute("disabled", true)
        }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup" variants={popup}>
                        <div className="monash-logo">
                            <img src={require('../images/monash-logo.png')} alt="" />
                        </div>
                        <div className="popup-text">
                            <iframe className="tnc" src="https://docs.google.com/document/d/e/2PACX-1vQVCYMZ4c89khJZLY26qNGs0CnNdtRta8BIui1Vy_xG_JjFcd_1VJat0U1EQVdMaKmi-S1xDyrFSsNX/pub?embedded=true"></iframe>
                        </div>
                        <div className="popup-buttons">
                            <div className="popup-checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => canBeSubmitted(e.target.checked)}
                                    />
                                    I understand and agree to all the terms stated above.
                                </label>
                            </div>
                            <div>
                                <Link to="/questions">
                                    <button disabled id="proceedBtn" onClick={() => setShowPopUp(false)}>Proceed</button>
                                </Link>
                            </div>

                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence >

    )
}


export default Popup