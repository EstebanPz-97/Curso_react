import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Categories from './Components/Categories'
import Carousel from './Components/Carousel'
import Carouselitem from './Components/Carouseitems'
import Footer from './Components/Footer'
import './App.css'


function App() {
 /* const API= 'http://localhost:3000/initialState'
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);*/
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories title="Mi lista" >
      </Categories>
      <Carousel>
      <Carouselitem />
      <Carouselitem />
      <Carouselitem />
      <Carouselitem />
      </Carousel>
      <Categories title="Tendencias">
      </Categories>
      <Carousel>
      <Carouselitem />
      <Carouselitem />
      <Carouselitem />
      <Carouselitem />
      </Carousel>
       <Categories title="Originales de PlatziVideo">
      </Categories>
      <Carousel>
      <Carouselitem />
      <Carouselitem />
      <Carouselitem />
      <Carouselitem />
      </Carousel>
      <Footer />

    </div>
  );
}

export default App;
