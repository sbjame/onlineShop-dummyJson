import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Api from '../api/ProductApi';
import '../styles/ProductLists.css'

import ProductCard from './Products/ProductCard';
import SidebarFilter from './Products/SidebarFilter';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { category: categoryFromUrl } = useParams();
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    // filter state
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(40000);

    useEffect(() => {
        const fetchProducts = async () =>{
            try {
                const res = await Api.get('/products?limit=194') 
                setProducts(res.data.products);
                setFiltered(res.data.products);
            } catch(error) {
                console.error('Error fetching Products: ', error);
            } finally {
                setLoading(false);
            }
    }

        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchCatefories = async () =>{
            try {
                const res = await Api.get('/products/categories');
                setCategories(res.data);
            } catch(error) {
                console.error('Error fetching Categories: ', error);
            } finally {
                setLoading(false);
            }
    }

        fetchCatefories();
    }, []);

    useEffect(() => {
        let result = products;

        if (category !== '') {
            result = result.filter(p => p.category === category);
        }

        result = result.filter(p =>
            ((p.price * (100 - p.discountPercentage)) / 100) >= minPrice &&
            ((p.price * (100 - p.discountPercentage)) / 100) <= maxPrice
        );

        setFiltered(result);
    }, [category, minPrice, maxPrice, products]);

    useEffect(() => {
        if (categoryFromUrl) {
            setCategory(categoryFromUrl);
        } else {
            setCategory('');
        }
    }, [categoryFromUrl])

    return (
        <div className='relative'>
            <div className='flex justify-center bg-gray-200'>
                <SidebarFilter
                    category={category}
                    setCategory={setCategory}
                    categories={categories}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    />

                <div className='left flex flex-col py-12 px-4 w-[95vw]'>
                    <h1 className='text-6xl text-black font-medium'>Product list</h1>
                    <h1 className='text-md text-black font-light mt-10 mb-2'>{filtered.length} Products</h1>
                    <ul className='flex flex-wrap w-full gap-1.5'>
                        {filtered.map(product =>(
                            <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() =>{}}
                            />
                        ))}
                    </ul>

                </div>
            </div>

            {loading && (
                <div className="absolute inset-0 z-50 bg-white/40 w-[100vw] h-[100vh] backdrop-blur-sm flex items-center justify-center">
                    <p className="text-xl font-medium text-gray-700 animate-pulse">Loading Products...</p>
                </div>
            )}
        </div>
    );
}

export default ProductList;
