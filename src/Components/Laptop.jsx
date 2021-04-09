import React from 'react';

const Laptop = (props) => {

	return (
		<div className="laptop-container">
			<div className="laptopname-container">
				<div>{props.brand}</div>
			</div>			
			<div>{props.name}</div>
			<div>{props.weight}</div>
		</div>
	)
};

export default Laptop;
