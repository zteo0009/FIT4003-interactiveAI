function App() {
  return (
<div className="min-h-screen flex flex-col text-black">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-4xl uppercase">Welcome to our</h2>
				<h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-black mb-8">AI Ethics Quiz</h1>

				<form 
					action= "" //Need to put action here
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Let's start!"
							name="member[submit]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>
				</form>
			</main>
		</div>
  );
}

export default App;
