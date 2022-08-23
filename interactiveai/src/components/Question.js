function Question(props) {
    return (
        <div className="min-h-screen text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className="text-lg md:text-lg lg:text-lg uppercase mb-16">Question {props.question.questionno}/6</h2>
                <h1 className="text-3xl md:text-6xl lg:text-4xl uppercase font-bold mb-16">Given the scenario...</h1>
                <h2 className="text-lg md:text-lg lg:text-lg uppercase mb-16">{props.question.scenario}</h2>
                <h1 className="text-lg md:text-lg lg:text-lg uppercase font-bold">What would you do?</h1>
            </main>
        </div>
    )
}

export default Question