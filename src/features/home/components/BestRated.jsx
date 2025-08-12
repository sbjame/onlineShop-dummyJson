import { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const BestRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { products } = useProducts();

  useEffect(() => {
    const sorted = products
      .filter(p => p.rating !== undefined)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    setTopRated(sorted)
  }, [products]);

  const navigate = useNavigate();

  const goToProductDetail = (p) =>{
    const category = p.category;
    const slug = p.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${category}/${slug}`);
  }
  
  return (
    <div className='bg-white p-8 flex flex-col gap-8'>
      <h2 className='text-3xl font-medium text-center'>Best Rated Products</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {topRated.map((product) => (
          <div key={product.id} onClick={() => {goToProductDetail(product)}} className="card cursor-pointer flex flex-col flex-auto basis-40 items-center justify-between border-2 border-gray-200 rounded p-8 transition-all duration-300 group">
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
    </div>
  );
};

export default BestRated;
