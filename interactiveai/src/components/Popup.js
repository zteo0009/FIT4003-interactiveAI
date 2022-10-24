import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const popup = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "5%",
        opacity: 1,
        transition: { delay: 0.5 },
    },
}

const Popup = ({ showPopUp, setShowPopUp, setShowUserPopUp }) => {
    const routeChange = () => {
        setShowPopUp(false);
        setShowUserPopUp(true);
    }
    const [btnDisabled, setBtnDisable] = useState(true);
    const canBeSubmitted = (input) => {
        if (input) {
            setBtnDisable(false);
        } else {
            setBtnDisable(true);
        }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup" variants={popup}>
                        <div className="popup-text">
                            <iframe className="tnc" src="https://docs.google.com/document/d/e/2PACX-1vQJ23bR-a9rLIJp1qZl8qgo4VhNmMVx5bmRUsExtC4-7EuU3_NkvdupfgpZH6ERKuZkBkbFXeyphxIs/pub?embedded=true"></iframe>
                        </div>
                        <div className="popup-buttons">
                            <div className="popup-checkbox">
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        onChange={(e) => canBeSubmitted(e.target.checked)}
                                    />
                                    I understand and agree to all the terms stated above.
                                </label>
                            </div>
                            <div>
                                <button id="proceedBtn" disabled={btnDisabled} onClick={routeChange}>Proceed</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence >

    )
}


export default Popup