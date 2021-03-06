import React, {useState, useEffect} from 'react';

const FreeWordSearcher = ({data, setFilteredLaptops, filteredLaptops}) => {

	const [search, setSearch] = useState('')
		
	//szabdszavas kereső

		useEffect(() => 	

		setFilteredLaptops(data.filter((laptop) =>
				{return laptop.name.toLowerCase().includes(search.toLowerCase()) ||
					laptop.brand.toLowerCase().includes(search.toLowerCase()) ||
					laptop.weigth.toString().includes(search)					
			? laptop : false}
		)), [search, data, setFilteredLaptops, filteredLaptops])

	return (
		<div>
			<input type="text" placeholder="keresés" onChange={(event) => {setSearch(event.target.value)}}/>
		</div>
	)
};

export default FreeWordSearcher;