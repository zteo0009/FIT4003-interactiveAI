import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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

const UserSelectionPopup = ({ showUserPopUp, setShowUserPopUp }) => {
    const [btnDisabled, setBtnDisable] = useState(true);
    const navigate = useNavigate();
    const canBeSubmitted = (input) => {
        if (input) {
            setBtnDisable(false);
        } else {
            setBtnDisable(true);
        }
    }

    const handleAnswerSelect = () => {
        setShowUserPopUp(false)
        const ai_student = document.getElementById("ai_student");
        const ai_practitioner = document.getElementById("ai_practitioner");
        const ai_researcher = document.getElementById("ai_researcher");
        const working_in_ai = document.getElementById("working_in_ai");
        const other_ai = document.getElementById("other_ai");
        const others = document.getElementById("others");
        let user;
        const userArray = [ai_student,ai_practitioner,ai_researcher, working_in_ai,other_ai]
        for(let i = 0; i<userArray.length; i++){
            if(userArray[i].checked){
                if(userArray[i].id !== "other_ai"){
                    user = userArray[i].value
                }
                else{
                    user = others.value
                }
            }
        }
        console.log(user)
		let path = '/questions';
		navigate(path, {
			state: {
                userSelected: user
			}
			});
	}
    return (
        <AnimatePresence exitBeforeEnter>
            {showUserPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popupUserSelect" variants={popup}>
                        <div className="popup-text-user-select">
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Before you take the quiz, please select what best describes you</h3>
                            <ul className="w-90 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="ai_student" type="radio" value="AI_student" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="ai_student" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">AI Student </label>
                                    </div>
                                </li>
                                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="ai_practitioner" type="radio" value="AI_practitioner" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="ai_practitioner" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">AI Practitioner</label>
                                    </div>
                                </li>
                                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="ai_researcher" type="radio" value="AI_researcher" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="ai_researcher" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">AI Researcher</label>
                                    </div>
                                </li>
                                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="working_in_ai" type="radio" value="working_in_AI_domain" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="working_in_ai" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Working in AI domain</label>
                                    </div>
                                </li>
                                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                        <input id="other_ai" type="radio" value="others" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label for="other_ai" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
                                    </div>
                                </li>
                                <div className="flex items-center">
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="others" type="text" placeholder="Others..."></input>
                                </div>
                            </ul>

                        </div>
                        <div className="popup-buttons">
                            <div className="popup-checkbox">
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        onChange={(e) => canBeSubmitted(e.target.checked)}
                                    />
                                    Start Quiz!
                                </label>
                            </div>
                            <div>
                                <button className="bg-transparent  text-black-700 font-semibold py-2 px-4 border border-black-500 rounded" id="proceedBtnSelect" disabled={btnDisabled} onClick={handleAnswerSelect}>Proceed</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence >

    )
}


export default UserSelectionPopup