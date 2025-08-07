import { NavLink } from "react-router-dom";

const SidebarFilter = ({ category, setCategory, categories, minPrice, maxPrice, setMinPrice, setMaxPrice}) => {
    return(
        <div className='right flex flex-col items-baseline p-8 '>
                <h1 className='browse font-light text-6xl w-[100%] mb-10'>Browse by</h1>
                <ul className='flex flex-col items-baseline gap-2'>
                    <li>
                        <NavLink to={`/product`} className={category === '' ? 'active font-medium text-xl text-lime-400 cursor-pointer' : 'font-light text-xl text-black cursor-pointer hover:text-gray-500 hover:underline'}>All Product</NavLink>
                    </li>
                    {categories.map((ct) => (
                        <li key={ct.name}>
                            <NavLink to={`/product/${ct.slug}`} className={category === ct.slug ? 'active font-medium text-xl text-lime-400 cursor-pointer' : 'font-light text-xl text-black cursor-pointer hover:text-gray-500 hover:underline'}>{ct.name}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className='flex flex-col items-baseline justify-center mt-10 gap-4'>
                    <h3 className='text-xl font-medium text-lime-400'>Price</h3>
                    <div className='flex justify-between items-center gap-2 text-md'>
                        <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} placeholder="Min Price" className='bg-gray-300 rounded-md p-2 w-[45%]'/>
                        -
                        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="Max Price" className='bg-gray-300 rounded-md p-2 w-[45%]'/>
                    </div>
                </div>
            </div>
    )
}

export default SidebarFilter;