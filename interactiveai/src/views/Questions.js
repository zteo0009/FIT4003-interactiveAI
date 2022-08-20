import React from 'react'
import Question from '../components/Question'
import QuizOptions from '../components/QuizOptions'

const Questions = () => {
  return (
    <React.Fragment>
      <section>
        <div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-cols-2'>
          <div className=' w-full h-full bg-white centered md:h-screen'>
            <Question />
          </div>

          {/* page 2 */}
          <div className='w-full h-full centered md:h-screen'>
            <QuizOptions />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Questions