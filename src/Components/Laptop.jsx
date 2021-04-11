import React, {useState} from 'react';


const Laptop = (props) => {

	const [showMore, setShowMore] = useState(false);
	const [buttonState, setButtonState] = useState('show more');

	/*const showMoreShowLess = () => {
		if (!showMore) {
			setShowMore(true);
			setButtonState('show less');
		} else {
			setShowMore(false);
			setButtonState('show more')
		}
	}*/

	return (
		<div className="laptop-container">
			<p className="laptop-detail">modell: <span className="laptop-modell">{props.name}</span></p>
			<button className="laptop-detail" onClick={() => {
				return !showMore ? (setShowMore(true) + setButtonState('show less')) 
				: 
				(setShowMore(false) + setButtonState('show more')) 
			}}>{buttonState}</button>

			{showMore && <div><p className="laptop-detail">brand: <span className="laptop-brand">{props.brand}</span></p><p className="laptop-detail">weight: {props.weigth} kg</p></div>}
				

		</div>
	)
};

export default Laptop;

