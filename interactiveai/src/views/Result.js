import React from 'react'
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Slider from "react-slick";
import ResultPopup from '../components/ResultPopup';
import '../assets/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Result = (props) => {

  const [question, setQuestionno] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);
  const { state } = useLocation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  const renderFeedback = () => {
    const totalScore = state.score.reduce((a, b) => a + b, 0)

    if (totalScore <= 4) {
      return <h2 className="text-xl md:text-xl lg:text-xl uppercase mb-16">You suck</h2>
    }
    else if (totalScore <= 8) {
      return <h2 className="text-xl md:text-xl lg:text-xl uppercase mb-16">You did ok</h2>
    }
    else {
      return <h2 className="text-xl md:text-xl lg:text-xl uppercase mb-16">You're literally hacking</h2>
    }
  }

  const showExplanation = (questionno) => {
    setQuestionno(questionno);
    setShowPopUp(true);
  }


  return (
    <React.Fragment>
      <section>
        <ResultPopup showPopUp={showPopUp} setShowPopUp={setShowPopUp} content={question}/>
        <motion.div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-rows-2' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
          <div className=' w-full h-full centered md:w-screen flex flex-col text-center px-6 pt-5'>
            <div className="flex-1 text-black" style={{ display: 'block', alignItems: 'center' }}>
              <div className="result-top">
                <h2 className="text-xl md:text-xl lg:text-xl uppercase font-bold mb-5">Result summary</h2>
                <Slider {...settings} className="slider-content">
                  <div className="slider-content">
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("1")}>Question 1</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("2")}>Question 2</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("3")}>Question 3</button>
                  </div>
                  <div className="slider-content">
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("4")}>Question 4</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("5")}>Question 5</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("6")}>Question 6</button>
                  </div>
                  <div className="slider-content">
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("7")}>Question 7</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("8")}>Question 8</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("9")}>Question 9</button>
                  </div>
                  <div className="slider-content">
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("10")}>Question 10</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("11")}>Question 11</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("12")}>Question 12</button>
                  </div>
                  <div className="slider-content">
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("13")}>Question 13</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("14")}>Question 14</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("15")}>Question 15</button>
                  </div>
                  <div className="slider-content">
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("16")}>Question 16</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("17")}>Question 17</button>
                    <button className="result-btn w-5/6 mb-1 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12" onClick={() => showExplanation("18")}>Question 18</button>
                  </div>
                </Slider>

              </div>
            </div>
          </div>

          {/* page 2 */}
          <div className='w-full h-full bg-white centered md:w-screen'>
            <div className="min-h-screen text-black" style={{ display: 'block', alignItems: 'center' }}>
              <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                {renderFeedback()}
              </main>
            </div>
          </div>
        </motion.div>
      </section>
    </React.Fragment>
  )
}

export default Result