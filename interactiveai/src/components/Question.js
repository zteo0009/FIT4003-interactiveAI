function Question(props) {
    return (
        <div className="text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="question container flex-1 text-center">
                <h3 className="text-black mb-2">Question {props.question.questionno}/x</h3>
                <h2 className="uppercase mb-6">Given the scenario...</h2>
                <div className="illustration mb-6">
                    {/* This is commented out for now just in case. Please remove later on if no longer necessary. */}
                    {/* <img src={require('../images/sample-illustration.png')} alt="" /> */}
                    <img src={props.question.image} alt="" />
                </div>
                <p className="text-base text-black md:text-lg lg:text-base text-justify mb-6 ">{props.question.scenario}</p>
            </main>
        </div>
    )
}

export default Question