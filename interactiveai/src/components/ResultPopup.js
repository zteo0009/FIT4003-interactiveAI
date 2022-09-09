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

const ResultPopup = ({ showPopUp, setShowPopUp, content, score, clickedQuestion }) => {

    //incase we add conditional image
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
    // console.log(currentQues);
    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup-result" variants={popup}>
                        <div className="popup-text-result">
                            <p>Question {content} Summary</p>
                        </div>
                        <div className="grid grid-rows-2 grid-flow-col gap-4">
                            <div>
                                <div className="glass-result-bg">
                                    <div className="grid grid-rows-1 gap-10 min-w-full">
                                        {/* <h3 className="text-black md:text-xl mb-2">{questions[currentQuestion].question}</h3> */}
                                        <h3 className="text-black">
                                        Feedback
                                        </h3>
                                        <p>
                                            {clickedQuestion.rationale}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="grid grid-cols-2 gap-4 min-w-full">
                                    <div>
                                        <h3 className="text-black">
                                            Scenario
                                        </h3>
                                        <p>{clickedQuestion.scenario}</p>
                                        <h2> {clickedQuestion.question}</h2>
                                        {/* <h3 className="text-black">
                                            YOU CHOOSE:
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et </p> */}
                                    </div>
                                    <div>
                                        <h3 className="text-black">Question Options</h3>
                                        <p>A. {clickedQuestion.answerOptions[0].answerText}</p>
                                        <p>B. {clickedQuestion.answerOptions[1].answerText}</p>
                                        <p>C. {clickedQuestion.answerOptions[2].answerText}</p>
                                        <p>D. {clickedQuestion.answerOptions[3].answerText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
					
                        {/* <div className="popup-image-result">
                            <img src={require(`../images/${image}`)} alt="" />
                        </div> */}
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