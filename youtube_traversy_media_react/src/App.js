import React, {useState, useEffect} from 'react';

import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  
  // value
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  // serial
  
  useEffect( ()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err=>console.log(err));
  }, [term]);

  // view
  const view = (
    <div className="grid grid-cols-4 gap-4">
      {images.map(image=>(
        <ImageCard key={image.id} image={image}/>
      ))}
    </div> 
  );
  
  const loading = (
    <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1>
  );
  
  // output
  const out = (
    <div className="container mx-auto">
      <ImageSearch searchText={setTerm} />
      { isLoading ? loading : view }
    </div>
  );

  return out

}

export default App;
