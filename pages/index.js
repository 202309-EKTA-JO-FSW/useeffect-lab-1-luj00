import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogList from '../Components/DogList/DogList';
import Form from '../Components/Form/Form';

export default function Home() {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    // Fetch dog data when the component mounts
    axios
      .get('https://dog.ceo/api/breeds/image/random/3')
      .then((response) => {
        setDogData(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching dog data:', error);
      });
  }, []);

  return (
    <div className="card">
      {/* Uncomment the Form component to fetch data */}
      { <Form setDogData={setDogData} ></Form>}
      <DogList dogData={dogData} />
    </div>
  );
}
