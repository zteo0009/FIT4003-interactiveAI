import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    }
}

const Popup = ({ showPopUp, setShowPopUp }) => {

    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup" variants={popup}>
                        <div className="popupText">
                            <p>Sample text</p>
                        </div>

                        <div className="popupButtons">
                            <label>
                                <input
                                    type="checkbox"
                                />
                                I understand and agree to all the terms stated above.
                            </label>
                            <br/>
                            <Link to="/questions">
                                <button onClick={() => setShowPopUp(false)}>Proceed</button>
                            </Link>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence >

    )
}
export default Popup