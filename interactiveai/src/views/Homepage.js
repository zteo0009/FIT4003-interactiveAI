import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Homepage() {

    const [disable, setDisable] = useState(true)
    const history = useHistory();

    function handleChange(e) {
        setDisable(e.target.value === "")
    }

    const routeChange = () =>{ 
        let path = '/questions'; 
        history.push(path);
    }

    return (
        <div className="min-h-screen text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <center><img src={require('../scale.png')} alt="" /></center>
                <h2 className="text-2xl md:text-4xl lg:text-3xl uppercase">Welcome to our</h2>
                <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-black mb-8">AI Ethics Quiz</h1>

                <form
                    action="" //Need to put action here
                    // method="post"
                    id="revue-form"
                    name="revue-form"
                    style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center'
                    }} size=''
                >

                    <div className="flex flex-col">
                        <input
                            placeholder="Your email address..."
                            type="email"
                            name="member[email]"
                            id="member_email"
                            className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-50 focus:bg-opacity-75 hover:bg-opacity-75 duration-150 md:rounded-full outline-none mb-4"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            value="Let's start!"
                            name="member[submit]"
                            id="member_submit"
                            disabled={disable}
                            className="bg-primary bg-black bg-opacity-30 md:rounded outline-none mb-4 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase"
                            onClick={routeChange}
                        >Let's start!</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Homepage