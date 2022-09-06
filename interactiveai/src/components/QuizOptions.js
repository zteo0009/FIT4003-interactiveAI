function QuizOptions(props) {
    return (
            <div className="options grid grid-rows-2 grid-flow-col gap-6">  
                <div>
                    <button
                        onClick={() => props.onSelectOption(props.options.answerOptions[0].score)}
                    >{props.options.answerOptions[0].answerText}</button>
                </div>
                <div>
                <button
                        onClick={() => props.onSelectOption(props.options.answerOptions[1].score)}
                    >{props.options.answerOptions[1].answerText}</button>
                </div>
                <div>
                <button
                        onClick={() => props.onSelectOption(props.options.answerOptions[2].score)}
                    >{props.options.answerOptions[2].answerText}</button>
                </div>
                <div>
                <button
                        onClick={() => props.onSelectOption(props.options.answerOptions[3].score)}
                    >{props.options.answerOptions[3].answerText}</button> 
                </div>          
            </div> 
    )
}

export default QuizOptions