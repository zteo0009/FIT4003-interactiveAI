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

const ResultPopup = ({ showPopUp, setShowPopUp, content, score, clickedQuestion, selectedOptionIndex }) => {

    const [open, setOpen] = useState({
        state: false,
        hide: "Hide Question",
        show: "Show Question"
    });
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
    const toggle = () => {
        const newState = {
            state: !open.state,
            hide: "Hide Question",
            show: "Show Question"
        }
        setOpen(newState);
    }

    const hideQuestion = () => {
        const newState = {
            state: false,
            hide: "Hide Question",
            show: "Show Question"
        }
        setOpen(newState);
    }

    const questionFeedback = () => {
        let obtainedScore = clickedQuestion.answerOptions[selectedOptionIndex].score
        if (obtainedScore == 1) {
            return <>
                <p className="text-xl md:text-xl lg:text-xl m-10 text-center">Good try! However, your understanding in the ethics principle of {clickedQuestion.principle} can still use some work...</p>
                <div className="feedback-popup">
                    <img class="scale-20" src={require('../images/bad-feedback.png')} alt="" />
                </div>
            </>
        } else if (obtainedScore == 2) {
            return <>
                <p className="text-xl md:text-xl lg:text-xl m-10 text-center">Nice work! You have shown a slight understanding in the ethics principle of {clickedQuestion.principle} when answering this question!</p>
                <div className="feedback-popup">
                    <img class="" src={require('../images/average-feedback.png')} alt="" />
                </div>
            </>
        } else if (obtainedScore == 3) {
            return <>
                <p className="text-xl md:text-xl lg:text-xl m-10 text-center">Good job! You have shown good understanding in the ethics principle of {clickedQuestion.principle} when answering this question!</p>
                <div className="feedback-popup">
                    <img class="" src={require('../images/average-feedback.png')} alt="" />
                </div>
            </>
        } else {
            return <>
                <p className="text-xl md:text-xl lg:text-xl m-10 text-center">Congratulations! You have shown thorough understanding in the ethics principle of {clickedQuestion.principle} when answering this question!</p>
                <div className="feedback-popup">
                    <img src={require('../images/good-feedback.png')} alt="" />
                </div>
            </>
        }
    }

    const findBestAnswer = (options) => {
        const alphabets = ["A", "B", "C", "D"];
        for (let i = 0; i < options.length; i++) {
            if (options[i].score == 4) {
                return alphabets[i]
            }
        }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {showPopUp && (
                <motion.div className="backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
                    <motion.div className="popup-result" variants={popup}>
                        <button id="proceedBtn" className="close" onClick={() => { setShowPopUp(false); hideQuestion(); }}></button>
                        <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase mb-5">Question {content} Summary</h2>
                        <hr></hr>
                        <div className="grid grid-rows-8 gap-2">
                            <div className="display-question row-span-2">
                                {questionFeedback()}
                            </div>
                            <div className="display-question row-span-2">
                                <div className="glass-result-bg my-5">
                                    <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase m-5">Feedback</h2>
                                    <p className="text-xl md:text-xl lg:text-xl m-10">{clickedQuestion.rationale}</p>
                                </div>
                                <button onClick={toggle}>{!open.state ? open.show : open.hide}</button>
                            </div>

                            {open.state &&
                                <div className="row-span-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase my-5">Scenario</h2>
                                            <p className="text-xl md:text-xl lg:text-xl m-10 text-justify">{clickedQuestion.scenario}</p>
                                            <p className="text-xl md:text-xl lg:text-xl m-10 font-bold">{clickedQuestion.question}</p>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase my-5">Answer Options</h2>
                                            <p className="text-xl md:text-xl lg:text-xl m-10 text-justify leading-loose">
                                                A. {clickedQuestion.answerOptions[0].answerText}<br></br><br></br>
                                                B. {clickedQuestion.answerOptions[1].answerText}<br></br><br></br>
                                                C. {clickedQuestion.answerOptions[2].answerText}<br></br><br></br>
                                                D. {clickedQuestion.answerOptions[3].answerText}<br></br><br></br>
                                                You selected: {selectedOptionIndex == 0 ? "A" : selectedOptionIndex == 1 ? "B" : selectedOptionIndex == 2 ? "C" : "D"}<br></br><br></br>
                                                Best Answer: {findBestAnswer(clickedQuestion.answerOptions)}
                                            </p>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >

    )
}


export default ResultPopup