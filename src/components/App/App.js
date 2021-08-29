import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Careers } from '../pages/Careers';
import { Locations } from '../pages/Locations';
import { Navigation } from '../Navigation/Navigation';

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/careers">
					<Careers />
				</Route>
				<Route path="/locations">
					<Locations />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
