import './HomeHeader.scss';
import yellowLineSvg from '../../assets/patterns/line.svg';
import rightArrowSvg from '../../assets/patterns/right-arrow.svg';
import whiteCirclesSvg from '../../assets/patterns/white-circles.svg';

const HomeHeader = () => {
	return (
		<header className="home-header">
			<img className="line" src={yellowLineSvg} alt="Yellow line svg" />
			<img className="right-arrow" src={rightArrowSvg} alt="Right arrow svg" />
			<img
				className="white-circles"
				src={whiteCirclesSvg}
				alt="White circles svg"
			/>
			<div className="home-header__container">
				<h1 className="home-header__title">
					Scooter <br /> sharing made simple
				</h1>
				<p className="home-header__content">
					Scoot takes the hassle out of urban mobility. Our bikes are placed in
					convenient locations in each of our cities. Use our app to locate the
					nearest bike, unlock it with a tap, and you’re away!
				</p>
				<button className="btn btn--primary">Get Scootin</button>
			</div>
		</header>
	);
};

export default HomeHeader;
