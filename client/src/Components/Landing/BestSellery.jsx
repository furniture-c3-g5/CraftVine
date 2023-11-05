import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BestSellery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('endpoint')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className='my-10 mr-[64rem] text-3xl'>Best Sellery</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[1250px] h-[443] ml-[11rem]'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map(item => (
            <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[271px] h-[374px]">
              <a href="#">
                <img className="rounded-t-lg" src={item.imageSrc} alt="" />
              </a>
              <div className="p-5 mb-8">
                <a href="#">
                  <h5 className="flex justify-start font-bold tracking-tight text-gray-900 dark:text-white text-sm">
                    {item.title}
                  </h5>
                </a>
                <p className="flex justify-start text-gray-700 dark:text-gray-400 text-sm my-4">
                  {item.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BestSellery;
