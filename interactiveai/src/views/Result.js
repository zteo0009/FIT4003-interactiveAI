import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import ResultPopup from '../components/ResultPopup';
import '../assets/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Result = (props) => {

  const [clickedQuestion, setClickedQuestion] = useState([]);
  const [question, setQuestionno] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);
  const { state } = useLocation();
  const questionRationale = state.questionlist;
  const [score, setScore] = useState(() => state.score.reduce((a, b) => a + b, 0));
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  const renderFeedback = () => {

    if (score <= 21) {
      return <>
        <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase mb-16">You suck</h2>
        <p className="text-xl md:text-xl lg:text-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </>
    }
    else if (score <= 42) {
      return <>
        <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase mb-16">You did ok</h2>
        <p className="text-xl md:text-xl lg:text-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </>
    }
    else {
      return <>
        <h2 className="text-2xl md:text-2xl lg:text-2xl uppercase mb-16">You're literally hacking</h2>
        <p className="text-xl md:text-xl lg:text-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </>
    }
  }

  const showExplanation = (questionno) => {
    setQuestionno(questionno);
    setShowPopUp(true);
    for (let i = 0; i < questionRationale.length; i++) {
      let indexRationale = i + 1;
      if (questionno.match(String(indexRationale))) {
        setClickedQuestion(questionRationale[i]);
      }
    }
    console.log(clickedQuestion);
  }

  const returnExplanation = (questionNo) => {
    const ques1 = String(questionNo);
    const ques2 = String(questionNo + 1);
    const ques3 = String(questionNo + 2);
    return (
      <div className="slider-content">
        <button className="result-btn w-5/6 mb-4 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation(ques1)}>Question {ques1}</button>
        {questionNo + 1 <= 16 ? <button className="result-btn w-5/6 mb-4 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation(ques2)}>Question {ques2}</button>: ""}
        {questionNo + 2 <= 16 ? <button className="result-btn w-5/6 mb-4 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation(ques3)}>Question {ques3}</button>: ""}
      </div>
    )
  }

  const tryAgainButton = () => {
    let path = '/';
    navigate(path);
  }

  let quesNos = []
  for (let i = 1; i <= questionRationale.length; i+= 3){
    quesNos.push(i);
  }
  return (
    <React.Fragment>
      <section>
        <ResultPopup showPopUp={showPopUp} setShowPopUp={setShowPopUp} content={question} score={score} clickedQuestion={clickedQuestion} />
        <motion.div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-rows-2' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
          <div className=' w-full h-full centered md:w-screen flex flex-col text-center px-6 pt-5'>
            <div className="flex-1 text-black" style={{ display: 'block', alignItems: 'center' }}>
              <div className="result-top">
                <p className="text-xl md:text-xl lg:text-xl uppercase mb-10">Result summary</p>
                <Slider {...settings} className="slider-content">
                  {quesNos.map(item => {
                    return returnExplanation(item);
                  })}
                </Slider>

              </div>
            </div>
          </div>

          {/* page 2 */}
          <div className='w-full h-full glass-bg-2 centered md:w-screen'>
            <div className="min-h-screen text-black" style={{ display: 'block', alignItems: 'center' }}>
              <main className="feedback container mx-auto px-6 pt-16 flex-1 text-center">
                {renderFeedback()}
                <button
                  type="submit"
                  value="Let's start!"
                  name="member[submit]"
                  id="member_submit"
                  className="start-btn"
                  onClick={tryAgainButton}>Try Again!</button>
              </main>
            </div>
          </div>
        </motion.div>
      </section>
    </React.Fragment>
  )
}

export default Result