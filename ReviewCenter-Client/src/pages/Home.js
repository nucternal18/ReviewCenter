import React, {useState} from 'react';
import BelindaFewings from '../assets/img/belinda-fewings-unsplash.jpg'
import SearchComponent from '../components/SearchComponent';

const Home = () => {
    const [term, setTerm] = useState("");
    return (
      <div className="w-full flex flex-col">
        <div
          className="w-full"
          style={{
            height: "600px",
            backgroundImage: `url(${BelindaFewings})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <SearchComponent searchText={(text) => setTerm(text)} />
        </div>
      </div>
    );
}

export default Home
