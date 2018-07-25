import React from 'react';

const Home = ({actionFunc, header}) => {
	return(
		<div>
			<h1>{header}</h1>
			<div className="button frame background-hover"
					onClick={() => actionFunc('This is a new header changed using redux!')}>
				Click me to change the header
			</div>
		</div>
	);
};

export default Home;