import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Laptop from './Laptop';
import SortButton from './SortButton';
import FreeWordSearcher from './FreeWordSearcher';


const LaptopList = () => {

	const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
	/*const [search, setSearch] = useState('')*/
	const [filteredLaptops, setFilteredLaptops] = useState(true);
	

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

	/*console.log(data);*/

	/*const filterText = (event) => {
		setSearch(event.target.value);		
	}*/

		//szabdszavas kereső
	/*useEffect(() => 
		setFilteredLaptops(data.filter((laptop) =>
				{return laptop.name.toLowerCase().includes(search.toLowerCase()) ||
					laptop.brand.toLowerCase().includes(search.toLowerCase())					
			? laptop : false}
		)), [search, data])*/

		console.log(filteredLaptops);

	return (

		<div>
			<header>				
				<FreeWordSearcher data={data} setFilteredLaptops={setFilteredLaptops}/>
				<SortButton filteredLaptops={filteredLaptops} setFilteredLaptops={setFilteredLaptops}/>
			</header>
			
		<div className="laptoplist-container">
			{
				isLoaded ?
				filteredLaptops.map((laptop) => 
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
