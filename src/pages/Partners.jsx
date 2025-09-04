import React from 'react';
import { Link } from 'react-router-dom';

export default function Partners() {
	return (
		<main style={{padding: 24}}>
			<h1>Partners</h1>
			<p>We collaborate with leading technology companies and institutions.</p>
			<p style={{marginTop: 16}}>
				<Link to="/contact">Become a Partner</Link>
			</p>
		</main>
	);
}

export { Partners };
