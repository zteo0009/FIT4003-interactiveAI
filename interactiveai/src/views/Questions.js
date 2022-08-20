import React, {useState} from "react";
import Question from '../components/Question'
import QuizOptions from '../components/QuizOptions'

const Questions = () => {

  const questions = [
		{
      questionno: 1,
			scenario: 'You ate a piece of bread.',
			answerOptions: [
				{ answerText: 'Be full', score: 0 },
				{ answerText: 'Be happy', score: 1 },
				{ answerText: 'Be sad', score: 2 },
				{ answerText: 'Die', score: 3 },
			],
		},
		{
      questionno: 2,
			scenario: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', score: 0 },
				{ answerText: 'Elon Musk', score: 1 },
				{ answerText: 'Bill Gates', score: 2 },
				{ answerText: 'Tony Stark', score: 3 },
			],
		},
    {
      questionno: 3,
			scenario: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionno: 4,
			scenario: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
      questionno: 5,
			scenario: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionno: 6,
			scenario: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
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
            <QuizOptions options={questions[currentQuestion]} onSelectOption={()=>{setCurrentQuestion(currentQuestion + 1)}}/>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Questions