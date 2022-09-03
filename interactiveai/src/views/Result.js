import React from 'react'
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Result = (props) => {
  const { state } = useLocation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <React.Fragment>
      <section>
        <motion.div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-rows-2' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
          <div className=' w-full h-full centered md:w-screen'>
            <div className="min-h-screen text-black" style={{ display: 'block', alignItems: 'center' }}>
              <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className="text-xl md:text-xl lg:text-xl uppercase font-bold mb-5">Here are your results...</h2>
                <Slider {...settings}>
                  <div>
                    <h3>1</h3>
                    <h3>1.1</h3>
                    <h3>1</h3>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
              </main>
            </div>
          </div>

          {/* page 2 */}
          <div className='w-full h-full bg-white centered md:w-screen'>
            <div className="min-h-screen text-black" style={{ display: 'block', alignItems: 'center' }}>
              <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className="text-xl md:text-xl lg:text-xl uppercase mb-16">Total score: {state.score.reduce((a, b) => a + b, 0)} / {4 * state.score.length}</h2>
              </main>
            </div>
          </div>
        </motion.div>
      </section>
    </React.Fragment>
  )
}

export default Result