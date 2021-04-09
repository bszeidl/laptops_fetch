import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Laptop from './Laptop';

const LaptopList = () => {

	const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
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

	console.log(data);


	return (

		<div>
			<label>Keresés</label>
			<input type="text"/>
			
		<div className="laptoplist-container">
			{
				isLoaded ?
				data.map((laptop) => 
					<Laptop
						key={`id-${laptop.brand}-${laptop.weight}`}
						brand={laptop.brand}
						name={laptop.name}
						weight={laptop.weight}				
					/>)

				:
				
				<LoadingMask />
			}

		</div>


		</div>
		
	)
}

export default LaptopList;
