import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<nav className="navigation">
			<Link to="/">
				<img className="navigation__logo" src={logo} alt="logo" />
			</Link>
			<div className="navigation__links">
				<Link to="/about">About</Link>
				<Link to="/careers">Careers</Link>
				<Link to="/locations">Locations</Link>
				<button className="btn btn--primary">Get Scootin</button>
			</div>
		</nav>
	);
};
