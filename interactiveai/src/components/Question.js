function Question(props) {
    return (
        <div className="min-h-screen text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                {/* <h3 className="text-lg text-black md:text-lg lg:text-lg uppercase mb-16">Question {props.question.questionno}/6</h3> */}
                <h2 className="text-3xl md:text-6xl lg:text-4xl uppercase font-bold mb-16">Given the scenario...</h2>
                <p className="text-lg text-black md:text-lg lg:text-lg mb-16">{props.question.scenario}</p>
                <h3 className="text-lg text-black md:text-lg lg:text-lg">{props.question.question}</h3>
            </main>
        </div>
    )
}

export default Question