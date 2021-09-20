import './Step.scss';

const Step = ({ icon, title, description }) => {
	return (
		<article className="step">
			<img className="step__icon" src={icon} alt="Small yellow icon of handy" />
			<h3 className="step__title">{title}</h3>
			<p className="step__description">{description}</p>
		</article>
	);
};

export default Step;
