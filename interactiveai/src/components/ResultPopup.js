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

const ResultPopup = ({ showPopUp, setShowPopUp }) => {

    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup" variants={popup}>
                        <div className="popup-text">
                            <p>Question 1</p>
                            <p>You chose a but the right answer is d so get rekt lol</p>
                            <p>Try harder next time</p>
                        </div>
                        <div className="popup-buttons">
                            <button id="proceedBtn" onClick={() => setShowPopUp(false)}>Close</button>
                        </div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >

    )
}


export default ResultPopup