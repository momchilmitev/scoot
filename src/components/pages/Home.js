import './Home.scss';
import HomeHeader from '../HomeHeader/HomeHeader';
import Step from '../Step/Step';

import handyIcon from '../../assets/icons/locate.svg';
import scooter from '../../assets/icons/scooter.svg';
import scooterRider from '../../assets/icons/ride.svg';

const steps = [
	{
		icon: handyIcon,
		title: 'Locate with app',
		description:
			'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ',
	},
	{
		icon: scooter,
		title: 'Pick your scooter',
		description:
			'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.',
	},
	{
		icon: scooterRider,
		title: 'Enjoy the ride',
		description:
			'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.',
	},
];

export const Home = () => {
	return (
		<>
			<HomeHeader />
			<main className="homepage__main">
				<div className="homepage__main-container">
					<section className="homepage__steps">
						{steps.map((step) => (
							<Step
								icon={step.icon}
								title={step.title}
								description={step.description}
							/>
						))}
					</section>
					<section className="homepage__details"></section>
				</div>
			</main>
		</>
	);
};
