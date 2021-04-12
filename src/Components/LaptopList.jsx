import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Laptop from './Laptop';
/*import FreeWordSearcher from './FreeWordSearcher';*/


const LaptopList = () => {

	const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
	/*const [search, setSearch] = useState('');*/
	/*const [filteredLaptops, setFilteredLaptops] = useState([]);*/


	console.log(data);

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

				<button onClick={() => setData(
					data.sort((a, b) =>  b.weigth - a.weigth))}>sort by weight
				</button>

				<button onClick={() => setData(
					data.sort((a, b) => (a.name > b.name) - (a.name < b.name)))}>sort by name
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

				isLoaded ?

				data.map((laptop) => 
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
<FreeWordSearcher data={data} setFilteredLaptops={setFilteredLaptops}/>
import SortButton from './SortButton';
<SortButton filteredLaptops={filteredLaptops} setFilteredLaptops={setFilteredLaptops}/>*/
