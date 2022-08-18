import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './views/Homepage'
import Questions from './views/Questions'
import Result from './views/Result'

function App() {
  return (
	<Router>
		<Switch>
			<Route path="/" exact>
				<Homepage />
			</Route>
			<Route path="/questions">
				<Questions />
			</Route>
			<Route path="/result">
				<Result />
			</Route>
		</Switch>
	</Router>
	
  );
}

export default App;
