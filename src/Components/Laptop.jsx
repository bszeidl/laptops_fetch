import React, {useState} from 'react';


const Laptop = (props) => {

	const [showMore, setShowMore] = useState(false);
	const [buttonState, setButtonState] = useState('Show more');

	

	return (
		<div className="laptop-container">
			<div>{props.name}</div>
			<button onClick={() => {setShowMore(true); setButtonState('Show less');}}>{buttonState}</button>

				{showMore ? <div>{props.brand}</div> : false}
				{showMore ? <div>{props.weigth}</div> : false}

		</div>
	)
};

export default Laptop;

/*	<button onClick={() => {setShowMore(true); setButtonState('Show less');}}>{buttonState}</button> */