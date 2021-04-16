import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Laptop from './Laptop';
/*import FreeWordSearcher from './FreeWordSearcher';*/
import {v4 as uuidv4} from 'uuid';


const LaptopList = () => {

	const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
	/*const [search, setSearch] = useState('');*/
	/*const [filteredLaptops, setFilteredLaptops] = useState([]);*/
	const [sortedData, setSortedData] = useState([]);
	/*const [sortedName, setSortedName] = useState([]);*/
	const [sortingCriteria, setSortingCriteria] = useState("unsorted");

	console.log('data');
	console.log(data);
	console.log('sortingCriteria');
	console.log(sortingCriteria);
	console.log('sortedData');
	console.log(sortedData);

  useEffect(() => {
    fetch("/api/laptop")
      .then((res) => res.json())
      .then((result) => {

				setData(result);

				setSortedData(result);
				setIsLoaded(true);
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

		//sorrendbe rakás

		

		useEffect(() => {
			if (sortingCriteria === "unsorted") {
				setSortedData(data);
			} else if (sortingCriteria === "lightToHeavy") {
				setSortedData(data.sort((a, b) =>   (b.weigth - a.weigth)))
			} else if (sortingCriteria === "heavyToLight") {
				setSortedData(data.sort((a, b) => (a.weigth - b.weigth)))
			} else if (sortingCriteria === "aToZ") {
				setSortedData(data.sort((a, b) =>  (a.name < b.name) - (a.name > b.name)))
			} else if (sortingCriteria === "zToA") {
				setSortedData(data.sort((a, b) =>  (a.name > b.name) - (a.name < b.name)))
			} else {
				return false;
			}

		}, [data, sortingCriteria]);

		
		
	
		
	return (
		
			<div>
				<header>

					{/*<input type="text" placeholder="keresés" onChange={(event) => (
						setSearch(event.target.value)				
					)}/>*/}

					<div>
						<select onInput={(event) => setSortingCriteria(event.target.value)}>
							<option value="unsorted">unsorted</option>
							<option value="lightToHeavy">from light to heavy</option>
							<option value="heavyToLight">from heavy to light</option>
							<option value="aToZ">name a to z</option>
							<option value="zToA">name z to a</option>
						</select>
					</div>


				</header>
				
			<div className="laptoplist-container">

				{

					isLoaded && sortedData ?

					sortedData.map((laptop) => 
					<Laptop
						key={uuidv4()}
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
setIsLoaded(true);

<select onChange={(event) => {setSortingCriteria(event.target.value)}}>
data.sort((a, b) => (a.name > b.name) - (a.name < b.name))
<FreeWordSearcher data={data} setFilteredLaptops={setFilteredLaptops}/>
import SortButton from './SortButton';
<SortButton filteredLaptops={filteredLaptops} setFilteredLaptops={setFilteredLaptops}/>*/
		/*const selectSorter = () => {
			
				if (sortingCriteria === "unsorted") {
					setSortedData(data);
				} else if (sortingCriteria === "lightToHeavy") {
					setSortedData(data.sort((a, b) =>  {return (b.weigth - a.weigth)}))
				} else if (sortingCriteria === "heavyToLight") {
					setSortedData(data.sort((a, b) =>  {return (a.weigth - b.weigth)}))
				} else if (sortingCriteria === "aToZ") {
					setSortedData(data.sort((a, b) =>  {return (a.name < b.name) - (a.name > b.name)}))
				} else if (sortingCriteria === "zToA") {
					setSortedData(data.sort((a, b) =>  {return (a.name > b.name) - (a.name < b.name)}))
				} else {
					return false;
				}	

		}*/
