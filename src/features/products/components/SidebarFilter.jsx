import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setMinPrice, setMaxPrice } from "../filterSlice"; 

const SidebarFilter = ({ categories }) => {
    const dispatch = useDispatch();
    const { category, minPrice, maxPrice } = useSelector(state => state.filter);

    return (
        <div className='right flex flex-col items-center md:items-baseline text-center px-0 py-8 min-w-[20vw]'>
            <h1 className='browse font-medium text-3xl lg:text-6xl w-full mb-10'>Browse by</h1>
            <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-1 gap-2 text-sm sm:text-base lg:text-xl'>
                <li className="flex items-baseline justify-baseline">
                    <NavLink
                        to={`/product`}
                        className={category === '' ? 'active font-medium text-lime-400 cursor-pointer' : 'font-light text-black cursor-pointer hover:text-gray-500 hover:underline'}
                    >
                        All Product
                    </NavLink>
                </li >
                {(categories || []).map((ct) => (
                    <li key={ct.name} className="flex items-baseline justify-baseline">
                        <NavLink
                            to={`/product/${ct.slug}`}
                            className={category === ct.slug ? 'active font-medium text-lime-400 cursor-pointer' : 'font-light text-black cursor-pointer hover:text-gray-500 hover:underline'}
                        >
                            {ct.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className='flex flex-col items-baseline justify-center mt-10 gap-4 w-full'>
                <h3 className='text-xl font-medium text-lime-400'>Price</h3>
                <div className='relative flex flex-row justify-between items-center gap-2 text-base w-full'>
                    <div className="relative w-full">
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => dispatch(setMinPrice(Number(e.target.value)))}
                            placeholder="Min Price"
                            className='bg-gray-300 rounded-md p-2 w-[100%]'
                            />
                        <span className="absolute top-1/2 transform -translate-y-1/2 right-2 text-sm text-gray-500 block">Min Price</span>
                    </div>
                    <span className="hidden lg:block"> - </span>
                    <div className="relative w-full">
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
                            placeholder="Max Price"
                            className='bg-gray-300 rounded-md p-2 w-[100%]'
                            />
                        <span className="absolute top-1/2 transform -translate-y-1/2 right-2 text-sm text-gray-500 block">Max Price</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;