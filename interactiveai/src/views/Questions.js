import React, { useEffect, useState } from "react";
import Question from '../components/Question'
import QuizOptions from '../components/QuizOptions'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { db } from '../index'
import { collection, getDocs, orderBy, query } from "firebase/firestore";

let scoreList = [];

const Questions = () => {

	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const navigate = useNavigate();

	const handleAnswerSelect = (score) => {

		scoreList.push(score);

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			let path = '/result';
			navigate(path, {
				state: {
					score: scoreList
				}
			});
		}
	}

	useEffect(() => {
		const getQuestions = async () => {
			const temp = [];
			const questionsCollectionRef = collection(db, "Scenario")
			const documents = await getDocs(query(questionsCollectionRef, orderBy("Scenariono")));

			documents.forEach(async collectionDoc => {
				const scenario = collectionDoc.data().Background;
				let subCollectionDocs = await getDocs(query(collection(db, "Scenario", collectionDoc.id, "Questions"), orderBy("Questionno")));
				subCollectionDocs.forEach(subCollectionDoc => {
					temp.push({
						scenario: scenario,
						question: subCollectionDoc.data().Question,
						answerOptions: subCollectionDoc.data().AnswerOptions,
						questionno: subCollectionDoc.data().Questionno
					})
				});
				setQuestions(temp);
			});

		}

		getQuestions();
	}, [])

	return (
		< React.Fragment >
			<section>
				<motion.div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-cols-2' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
					<img className="fixed mx-auto bottom-0 object-center" src={require('../images/ellipse-2.png')} alt="" />
					<img className="fixed top-30 left-0" src={require('../images/ellipse-1.png')} alt="" />
					{/* Left part */}
					{questions && questions.length > 0 &&
						<div className='questions-bg w-full h-full centered md:h-screen'>
							<Question question={questions[currentQuestion]} />
						</div>
					}

					{/* Right part */}
					{questions && questions.length > 0 &&
						<div className='w-full h-full centered md:h-screen'>
							<QuizOptions options={questions[currentQuestion]} onSelectOption={(score) => { handleAnswerSelect(score) }} />
						</div>
					}
				</motion.div>
			</section>
		</React.Fragment >

	)
}

export default Questions