import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };
  
    // const [data, setData] = useState('') 
  //   const fetchProducts = async () => {
    
  //     try {
  //       const response = await api.getData()
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
    
  // }

  // useEffect(() => {
  //   fetchProducts()
  //   // eslint-disable-next-line
  // }, [])
  
  const tempstars = Array.from({ length: 5 }, (_, index) => {
    const stars = 4.6;
    const oneAddedNumber = index + 1
    const halfAddedNumber = index + 0.5
    return (
      <span>
        {
          stars > oneAddedNumber ? console.log(oneAddedNumber) :
            stars > halfAddedNumber ? console.log(halfAddedNumber) :
              console.log(0)
        }
      </span>
    )
  })
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default App;
