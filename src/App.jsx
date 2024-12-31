import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './components/Product';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response);
      setState(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ResponsiveAppBar/>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        {state.map((ele) => (
          <Product key={ele.id} product={ele} />
        ))}
      </div>
    </div>
  );
}

export default App;