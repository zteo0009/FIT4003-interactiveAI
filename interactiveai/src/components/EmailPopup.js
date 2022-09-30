import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { db } from '../index'
import { collection, addDoc } from "firebase/firestore";

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

const EmailPopup = ({ showPopUp, setShowPopUp }) => {

    const [email, setEmail] = useState("");
    const [btnDisabled, setBtnDisable] = useState(true);
    const canBeSubmitted = (input) => {
        setEmail(input);
        if (input.trim().length !== 0) {
            setBtnDisable(false);
        } else {
            setBtnDisable(true);
        }
    }

    const submitEmail = async () => {
        console.log("a");
		const docRef = await addDoc(collection(db, "Emails"), {
			email: email
		});
	}

    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup-email" variants={popup}>
                        <button id="emailCloseBtn" className="close" onClick={() => { setShowPopUp(false); }}></button>
                        <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase mb-5">Interview</h2>
                        <p className="text-xl md:text-xl lg:text-xl mb-10">If you would like to participate in an interview to share more of your thoughts at a later date, please leave your email details so we can contact you.</p>
                        <label>
                            Email:
                            <input type="text" name="name" onChange={(e) => canBeSubmitted(e.target.value)}/>
                        </label>
                        <div>
                            <button id="proceedBtn" disabled={btnDisabled} className="submitButton" onClick={() => submitEmail()}>Submit</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence >

    )
}


export default EmailPopup