function QuizOptions(props) {
    return (
        <div className="min-h-screen text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h3 className="text-lg text-black md:text-lg lg:text-lg mb-8">{props.options.question}</h3>
                <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[0].score)}
                    className="quiz-btn w-5/6 mb-8 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12"
                >{props.options.answerOptions[0].answerText}</button>
                <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[1].score)}
                    className="quiz-btn w-5/6 mb-8 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12"
                >{props.options.answerOptions[1].answerText}</button>
                <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[2].score)}
                    className="quiz-btn w-5/6 mb-8 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12"
                >{props.options.answerOptions[2].answerText}</button>
                <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[3].score)}
                    className="quiz-btn w-5/6 mb-8 text-xl py-4 px-6 md:px-10 lg:py-6 lg:px-12"
                >{props.options.answerOptions[3].answerText}</button>
            </main>
        </div>
    )
}

export default QuizOptions