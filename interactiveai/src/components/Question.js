function Question(props) {
    const scenarioNo = props.question.scenariono;
    let img = '';
    switch(scenarioNo){
        case 1:
            img = 'scenario-1.png';
            break;
        case 2:
            img = 'scenario-2.png';
            break;
        case 3:
            img = 'scenario-3.png';
            break;
        case 4:
            img = 'scenario-4.png';
            break;
        default:
            console.log("error");
    }
    return (
        <div className="text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="question container flex-1 text-center">
                <h3 className="text-black mb-2">Question {props.question.questionno}/{props.total}</h3>
                <h2 className="uppercase mb-6">Given the scenario...</h2>
                <div className="illustration mb-6">
                    {/* This is commented out for now just in case. Please remove later on if no longer necessary. */}
                    {/* <img src={require('../images/sample-illustration.png')} alt="" /> */
                        console.log(img)
                    }
                    <img src={require(`../images/${img}`)} alt={img} />
                </div>
                <p className="text-base text-black md:text-base lg:text-base text-justify mb-6 ">{props.question.scenario}</p>
            </main>
        </div>
    )
}

export default Question