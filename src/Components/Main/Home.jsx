import React, { useState, useEffect } from 'react';
import './Main.scss';
import axios from '../../API/Index';
import Products from '../Products/Products';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products?limit=${count * 10}`)
      .then((res) => setData(res.data.products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [count]);

  return (
    <>

      <Products loading={loading} data={data} />
       <div className="bt">
       <button id='btn' onClick={() => setCount((prevState) => prevState + 1)}>
        Learn more
      </button>
       </div>
       
    </>
  );
};

export default Home;