import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Laptop from './Laptop';
/*import FreeWordSearcher from './FreeWordSearcher';*/


const LaptopList = () => {

	const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
	/*const [search, setSearch] = useState('');*/
	/*const [filteredLaptops, setFilteredLaptops] = useState([]);*/
	const [sortedWeight, setSortedWeight] = useState([]);
	const [sortedName, setSortedName] = useState([]);

	console.log('data');
	console.log(data);
	console.log('sortedWeight');
	console.log(sortedWeight);
	console.log('sortedName');
	console.log(sortedName);

  useEffect(() => {
    fetch("/api/laptop")
      .then((res) => res.json())
      .then((result) => {setData(result);
					
          setTimeout(() => {
            setIsLoaded(true);
          }, 2000);
      	},				

      	(error) => {
        	console.log(error);
        	setIsLoaded(true);
      	}

      );
			
  }, []);


		//szabdszavas kereső
		/*useEffect(() => 
		setFilteredLaptops(data.filter((laptop) =>
				{return laptop.name.toLowerCase().includes(search.toLowerCase()) ||
					laptop.brand.toLowerCase().includes(search.toLowerCase())	||
					laptop.weigth.toString().includes(search)				
			? laptop : false}
		)), [search, data])*/
		
		/*console.log(search);*/

		/*const freeWordSearcher = () => {
			setFilteredLaptops(data.filter((laptop) =>
			{return laptop.name.toLowerCase().includes(search.toLowerCase()) ||
				laptop.brand.toLowerCase().includes(search.toLowerCase())	||
				laptop.weigth.toString().includes(search)				
			? laptop : false}
		}*/
	

	return (

		<div>
			<header>

				{/*<input type="text" placeholder="keresés" onChange={(event) => (
					setSearch(event.target.value)
				
				)}/>*/}

				<button onClick={() => setSortedWeight(
					data.sort((a, b) =>  b.weigth - a.weigth))}>sort by weight
				</button>

				<button onClick={() => setSortedName(
					data.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)))}>sort by name
				</button>

			</header>
			
		<div className="laptoplist-container">
			{
				/*isLoaded && filteredLaptops.length ?
				filteredLaptops.map((laptop) => 
					<Laptop
						key={`id-${laptop.brand}-${laptop.weight}`}
						brand={laptop.brand}
						name={laptop.name}
						weigth={laptop.weigth}				
				/>)*/

				isLoaded  ?

				sortedWeight.map((laptop) => 
				<Laptop
					key={`id-${laptop.brand}-${laptop.weight}`}
					brand={laptop.brand}
					name={laptop.name}
					weigth={laptop.weigth}				
				/>)

				||
			
				sortedName.map((laptop) => 
				<Laptop
					key={`id-${laptop.brand}-${laptop.weight}`}
					brand={laptop.brand}
					name={laptop.name}
					weigth={laptop.weigth}				
				/>)

				:

				<LoadingMask />
			}

		</div>


		</div>
		
	)
}

export default LaptopList;


/*
data.sort((a, b) => (a.name > b.name) - (a.name < b.name))
<FreeWordSearcher data={data} setFilteredLaptops={setFilteredLaptops}/>
import SortButton from './SortButton';
<SortButton filteredLaptops={filteredLaptops} setFilteredLaptops={setFilteredLaptops}/>*/
