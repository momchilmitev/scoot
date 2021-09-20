import HomeHeader from '../HomeHeader/HomeHeader';

export const Home = () => {
	return (
		<>
			<HomeHeader />
			<main>
				<div className="main__container">
					<section className="steps"></section>
					<section className="details"></section>
				</div>
			</main>
		</>
	);
};
