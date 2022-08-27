import React, { useState } from "react";
import Question from '../components/Question'
import QuizOptions from '../components/QuizOptions'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Questions = () => {

	const questions = [
		{
			questionno: 1,
			scenario: 'You ate a piece of bread.',
			answerOptions: [
				{ answerText: 'Be full', score: 0 },
				{ answerText: 'Be happy', score: 1 },
				{ answerText: 'Be sad', score: 2 },
				{ answerText: 'Eat more and become fat', score: 3 },
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
				{ answerText: 'New York', score: 0 },
				{ answerText: 'London', score: 1 },
				{ answerText: 'Paris', score: 2 },
				{ answerText: 'Dublin', score: 3 },
			],
		},
		{
			questionno: 4,
			scenario: 'Who is the most handsome man alive?',
			answerOptions: [
				{ answerText: 'daro', score: 0 },
				{ answerText: 'daro', score: 1 },
				{ answerText: 'daro', score: 2 },
				{ answerText: 'daro', score: 3 },
			],
		},
		{
			questionno: 5,
			scenario: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', score: 0 },
				{ answerText: 'Intel', score: 1 },
				{ answerText: 'Amazon', score: 2 },
				{ answerText: 'Microsoft', score: 3 },
			],
		},
		{
			questionno: 6,
			scenario: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', score: 0 },
				{ answerText: '4', score: 1 },
				{ answerText: '6', score: 2 },
				{ answerText: '7', score: 3 },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const navigate = useNavigate();

	const handleAnswerSelect = () => {
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			let path = '/result';
			navigate(path)
		}
	}

	return (
		<React.Fragment>

			<section>
				
				<motion.div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-cols-2' initial={{width : 0}} animate={{width : "100%"}} exit={{x : window.innerWidth, transition: {duration: 0.1}}}>
					<img className="fixed mx-auto bottom-0 object-center" src={require('../images/ellipse-2.png')} alt="" />
					<img className="fixed top-30 left-0" src={require('../images/ellipse-1.png')} alt="" />
					{/* Left part */}
					<div className='questions-bg w-full h-full centered md:h-screen'>
						<Question question={questions[currentQuestion]} />
					</div>

					{/* Right part */}
					<div className='w-full h-full centered md:h-screen'>
						<QuizOptions options={questions[currentQuestion]} onSelectOption={() => { handleAnswerSelect() }} />
					</div>
				</motion.div>
			</section>
		</React.Fragment>
	)
}

export default Questions