import React from 'react';
// import './GoogleKeepCss.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
	<React.Fragment>
		<footer className="" style={{backgroundColor:'red'}}>
		  <div className="container text-center pb-2">
		    <span className="text-muted">Copyright © {year}</span>
		  </div>
		</footer>
	</React.Fragment>
	);
}
export default Footer;