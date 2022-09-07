import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const ResultPopup = ({ showPopUp, setShowPopUp, content, score }) => {

    const [image, setImg] = useState(() => {
        if (score <= 4) {
            //change image
            return 'sample-illustration.png';
        }
        else if (score <= 8) {
            //change image
            return 'robot-arm.png';
        }
        else {
            //change image
            return 'robot-arm.png';
        }
    })

    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup" variants={popup}>
                        <div className="popup-text-result">
                            <p>Question {content}</p>
                            <p>You chose a but the right answer is d so get rekt lol</p>
                            <p>Try harder next time</p>
                        </div>
                        <div className="popup-image-result">
                            <img src={require(`../images/${image}`)} alt="" />
                        </div>
                        <div className="popup-buttons-result">
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