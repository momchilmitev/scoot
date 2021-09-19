import './Navigation.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import closeIcon from '../../assets/icons/close.svg';

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navigation">
			<div className="navigation__container">
				<img
					className="navigation__icon"
					src={isOpen ? closeIcon : hamburgerIcon}
					alt="navigation trigger button"
					onClick={() => setIsOpen(!isOpen)}
				/>
				<Link className="navigation__logo" to="/">
					<img src={logo} alt="logo" />
				</Link>
				<div
					className={
						isOpen ? 'navigation__background' : 'navigation__background--closed'
					}
				></div>
				<div
					className={isOpen ? 'navigation__links' : 'navigation__links--closed'}
				>
					<div className="navigation__links-container">
						<Link
							className="navigation__link"
							to="/about"
							onClick={() => setIsOpen(false)}
						>
							About
						</Link>
						<Link
							className="navigation__link"
							to="/careers"
							onClick={() => setIsOpen(false)}
						>
							Careers
						</Link>
						<Link
							className="navigation__link"
							to="/locations"
							onClick={() => setIsOpen(false)}
						>
							Locations
						</Link>
					</div>
					<button className="btn btn--primary">Get Scootin</button>
				</div>
			</div>
		</nav>
	);
};
