function QuizOptions(props) {
    return (
            <div className="options grid grid-rows-2 grid-flow-col gap-6">  
            <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[0].score)}
                    className="option-1 test"
                >{props.options.answerOptions[0].answerText}</button>
            <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[1].score)}
                    className="option-2"
                >{props.options.answerOptions[1].answerText}</button>
            <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[2].score)}
                    className="option-3"
                >{props.options.answerOptions[2].answerText}</button>
            <button
                    onClick={() => props.onSelectOption(props.options.answerOptions[3].score)}
                    className="option-4"
                >{props.options.answerOptions[3].answerText}</button> 
            </div> 
    )
}

export default QuizOptions