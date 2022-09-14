import { data } from './data';
import './App.css';
import { useState } from 'react';

function App() {
const [places, setPlaces] = useState(data);
const [showText, setShowText] = useState (false);


const removeItem = (id) => { 
let newPlaces = places.filter (place => place.id !==id);
setPlaces(newPlaces);
console.log(newPlaces);
}

const showTextClick = (item) => {
item.showMore = !item.showMore;
setShowText(!showText)
}

  return (
    <div className="App">

      <div className='container'>
        <h1>{places.length} The Best Places to Visit in the United States</h1>
      </div>

      {places.map ((item => {
        const {id, placeName, description, image, attractions, showMore} = item;
        return(<div key={id}>

                  <div className='container city'>
                    <h2>{id}. {placeName}</h2>
                  </div>

                  <div className='container'>
                    <p className='description'>{showMore ? description : description.substring (0, 150) + " ..."}
                    <button className='show' onClick ={()=> showTextClick(item)}>{showMore ? "Show less" : "show more"}</button>
                    </p> 
                  </div> 

                  <div className='container pic'>
                    <img src={image} alt={placeName} width="400px" />
                  </div>

                  <div className='container'>
                    <p className='attraction'><b>Attraction:</b> {attractions}</p>
                  </div>

                  <div className='container'>
                    <button className='btn' onClick={()=>removeItem(id)}>Remove</button>
                  </div>
        </div>
        )
      }))}
        <div className='container'>
          <button className='btn' onClick = {()=> setPlaces([])}>Delete All</button>
        </div>

      </div>
  );
}

export default App;