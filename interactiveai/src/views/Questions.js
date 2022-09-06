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
				<motion.div className='w-screen grid text-black text-4xl md:grid-cols-5' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
					<img className="fixed bottom-0 object-center w-2/3 h-5/6" src={require('../images/ellipse-2.png')} alt="" />
					<img className="fixed top-30 left-0 " src={require('../images/ellipse-1.png')} alt="" />
					{/* Left part */}
					{questions && questions.length > 0 &&
					<div className="col-span-2 questions-parent max-h-screen md:h-screen ">
						<div className='scenario-questions-card glass-bg'>
							<Question question={questions[currentQuestion]} />
						</div>
					</div>	
					}

					{/* Right part */}
					{questions && questions.length > 0 &&
					<div className="col-span-3 options-parent max-h-screen">
						<div className="grid grid-rows-5 gap-10 min-w-full">
							<div className="row-span-2 primary-questions-card glass-bg">
								<h3 className="text-lg text-black md:text-lg lg:text-lg mb-8">{questions[currentQuestion].question}</h3>
							</div>
							<div className="row-span-3 options-questions-card glass-bg">
							<QuizOptions options={questions[currentQuestion]} onSelectOption={(score) => { handleAnswerSelect(score) }} />

							</div>
						</div>
							{/* <div className='w-full h-full centered md:h-screen'>
						</div> */}
					</div>	
					}

			

				</motion.div>
			</section>
		</React.Fragment >

	)
}

export default Questions