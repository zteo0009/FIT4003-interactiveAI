import React, {useState} from "react";
import Question from '../components/Question'
import QuizOptions from '../components/QuizOptions'

const Questions = () => {

  const questions = [
		{
      questionno: 1,
			scenario: 'You ate a piece of bread.',
			answerOptions: [
				{ answerText: 'Be full', isCorrect: false },
				{ answerText: 'Be happy', isCorrect: false },
				{ answerText: 'Be sad', isCorrect: false },
				{ answerText: 'Die', isCorrect: true },
			],
		},
		{
      questionno: 2,
			scenario: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <React.Fragment>
      <section>
        <div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-cols-2'>
          <div className=' w-full h-full bg-white centered md:h-screen'>
            <Question question={questions[currentQuestion]}/>
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