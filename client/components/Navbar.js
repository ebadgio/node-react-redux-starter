import React from 'react';

import {
  Link
} from 'react-router-dom'

const Navbar = ({title, tabs}) => {
	return(
		<div className="nav shadow frame">
			<div className="nav-content row-apart">
				<h2>
					{title}
				</h2>
				<div className="row nav-tabs">
					{tabs.map((tab) => <Link className="nav-tab frame background-hover"
											 key={tab.text} 
											 to={tab.route}>
											{tab.text}
										</Link>)}
				</div>
			</div>
		</div>
	)
};

export default Navbar;