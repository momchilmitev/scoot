import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import closeIcon from '../../assets/icons/close.svg';

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navigation">
			<img
				src={isOpen ? closeIcon : hamburgerIcon}
				alt="navigation triger button"
				onClick={() => setIsOpen(!isOpen)}
			/>
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
