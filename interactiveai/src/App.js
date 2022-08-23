import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './views/Homepage'
import Questions from './views/Questions'
import Result from './views/Result'

function App() {
  return (
	<Router>
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/questions" element={<Questions />} />
			<Route path="/result" element={<Result />} />
		</Routes>
	</Router>
  );
}

export default App;
