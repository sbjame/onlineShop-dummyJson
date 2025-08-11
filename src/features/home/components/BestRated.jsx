import { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';

const BestRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { loading, filtered } = useProducts();

  useEffect(() => {
    const sorted = filtered
      .filter(p => p.rating !== undefined)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    setTopRated(sorted)
  }, [filtered]);

  return (
    <div className='bg-white p-8 flex flex-col gap-8'>
      <h2 className='text-3xl font-medium text-center'>Best Rated Products</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {topRated.map((product) => (
          <div key={product.id} className="card flex flex-col flex-auto basis-40 items-center justify-between border-2 border-gray-200 rounded p-8 transition-all duration-300 group">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="object-cover rounded group-hover:scale-110 group-hover:drop-shadow-xl"
            />
            <div className='w-full'>
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="font-medium text-lime-400">${product.price}</p>
              <p className="text-yellow-500 font-semibold">{product.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="absolute inset-0 z-50 bg-white/40 w-[100vw] h-[100vh] backdrop-blur-sm flex items-center justify-center">
          <p className="text-xl font-medium text-gray-700 animate-pulse">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default BestRated;
