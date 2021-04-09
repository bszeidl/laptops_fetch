import React from 'react';

const Laptop = (props) => {

	return (
		<div className="laptop-container">
			<div>{props.name}</div>
			<button>Show more</button>
			<div>{props.brand}</div>
			<div>{props.weigth}</div>
		</div>
	)
};

export default Laptop;
