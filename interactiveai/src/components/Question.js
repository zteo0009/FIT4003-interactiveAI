function Question() {
    return (
        <div className="min-h-screen text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className="text-lg md:text-lg lg:text-lg uppercase">Question 1/7</h2>
                <br />
                <h1 className="text-3xl md:text-6xl lg:text-4xl uppercase font-bold mb-5">Given the scenario...</h1>
                <br />
                <h2 className="text-lg md:text-lg lg:text-lg uppercase mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                <br />
                <h1 className="text-lg md:text-lg lg:text-lg uppercase font-bold">What would you do?</h1>
            </main>
        </div>
    )
}

export default Question