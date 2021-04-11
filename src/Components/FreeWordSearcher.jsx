import React, {useState, useEffect} from 'react';

const FreeWordSearcher = ({data, sortedData, setFilteredLaptops}) => {

	const [search, setSearch] = useState('')
		//szabdszavas kereső

		/*let examinedData = sortedData.length ? sortedData : data;*/
	
		useEffect(() => 	

		setFilteredLaptops(data.filter((laptop) =>
				{return laptop.name.includes(search) ||
					laptop.brand.toLowerCase().includes(search.toLowerCase())					
			? laptop : false}
		)), [search, data, setFilteredLaptops])

	return (
		<div>
			<input type="text" placeholder="keresés" onChange={(event) => {setSearch(event.target.value)}}/>
		</div>
	)
};

export default FreeWordSearcher;