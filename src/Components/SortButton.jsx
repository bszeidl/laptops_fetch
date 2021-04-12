import React from 'react';

const SortButton = (props) => {

		

	const laptopWeightSorter = () => {
		props.setFilteredLaptops(props.filteredLaptops.sort((a, b) => {return b.weigth - a.weigth}));
		/*console.log(props.filteredLaptops);*/
	}

	const laptopNameSorter = () => {
		props.setFilteredLaptops(props.filteredLaptops.sort((a, b) => {return (a.name > b.name) - (a.name < b.name)}));
		/*console.log(props.filteredLaptops);*/
	}



	return (
		<div>
			<button onClick={laptopWeightSorter}>sort by weight</button>
			<button onClick={laptopNameSorter}>sort by name</button>
		</div>
	)
}

export default SortButton;

/* 
	const sorter = (sortBy) => {
		const sortedArray = data.splice();
		if (sortBy === "weight") {
			return sortedArray.sort(function (a, b) {return b.weigth - a.weigth});
		} else if (sortBy === "name") {
			return sortedArray.sort(function (a, b) {return b.name - a.name});
		} else {
			return data;
		}
	};

*/