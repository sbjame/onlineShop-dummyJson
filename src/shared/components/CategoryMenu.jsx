import Api from '../../api/ProductApi';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CategoryMenu = ({ className = '', variant = 'nav' }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const randomCategories = categories.slice().sort(() => Math.random() - 0.5).slice(0, 3);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await Api.get('/products/categories');
                setCategories(res.data);
            } catch (error) {
                console.error('Category Loading Error: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories()
    }, []);

    return (
        <div className='relative'>
            <div className={`${variant === 'nav'
                ? 'flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-4 bg-gray-200 py-2 px-2 md:px-8 font-light text-xs sm:text-sm'
                : 'flex-col items-baseline justify-baseline text-sm sm:text-base'
                } ${className || ''}`}>
                <NavLink to={`/product`} className='cursor-pointer hover:text-lime-400 transition-all duration-300'>Shop ALL</NavLink>
                {randomCategories.map((ct) => (
                    <div key={ct.name} className='cursor-pointer hover:text-lime-400 transition-all duration-300'>
                        <NavLink to={`/product/${ct.slug}`}>{ct.name}</NavLink>
                    </div>
                ))}
            </div>
            {loading && (
                <div className="absolute inset-0 z-50 bg-white/40 w-[100vw] h-[100vh] backdrop-blur-sm flex items-center justify-center">
                    <p className="text-xl font-medium text-gray-700 animate-pulse">Loading...</p>
                </div>
            )}
        </div>
    )
}

export default CategoryMenu