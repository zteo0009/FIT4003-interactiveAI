function QuizOptions() {
    return (
        <div className="min-h-screen text-black" style={{ display: 'flex', alignItems: 'center' }}>
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <button
                    className="w-5/6 bg-primary bg-black hover:bg-opacity-50 bg-opacity-30 md:rounded outline-none mb-8 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold"
                >Option A</button>
                <button
                    className="w-5/6 bg-primary bg-black hover:bg-opacity-50 bg-opacity-30 md:rounded outline-none mb-8 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold"
                >Option B</button>
                <button
                    className="w-5/6 bg-primary bg-black hover:bg-opacity-50 bg-opacity-30 md:rounded outline-none mb-8 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold"
                >Option C</button>
                <button
                    className="w-5/6 bg-primary bg-black hover:bg-opacity-50 bg-opacity-30 md:rounded outline-none mb-8 text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold"
                >Option D</button>
            </main>
        </div>
    )
}

export default QuizOptions