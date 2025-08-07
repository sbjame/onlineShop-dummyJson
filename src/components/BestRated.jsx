import { useEffect, useState } from 'react';
import Api from '../api/ProductApi'
import '../styles/ProductLists.css'

const BestRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const res = await Api.get('/products');
        const sorted = res.data.products
          .filter(p => p.rating !== undefined)
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);

        setTopRated(sorted);
      } catch (error) {
        console.error('Error fetching top-rated products:', error);
      }
    };

    fetchTopRated();
  }, []);

  return (
    <div className='bg-white p-8 flex flex-col gap-8'>
      <h2 className='text-3xl font-medium text-center'>Best Rated Products</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {topRated.map((product) => (
          <div key={product.id} className="flex flex-col justify-between card border-2 border-gray-200 rounded p-8">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-50 object-cover mb-2 rounded"
            />
            <div>
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="font-medium text-lime-400">${product.price}</p>
              <p className="text-yellow-500 font-semibold">{product.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestRated;
