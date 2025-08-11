import { NavLink } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { totalQuantity } = useSelector(state => state.cart);

    return (
        <div className='top-0 z-1000 bg-white w-full'>
            <nav className='flex flex-col'>
                <div className='flex justify-between items-baseline py-4 px-1 sm:px-8 sm:py-8'>
                    <div>
                        <NavLink to='/' className='text-Black text-2xl sm:text-5xl font-bold'>Online Shop</NavLink>
                    </div>
                    <div className='flex justify-center items-center gap-4 text-sm sm:text-base'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'btn active cursor-pointer text-lime-400' : 'cursor-pointer hover:text-lime-400 transition-all duration-300'}>Home</NavLink>
                        <NavLink  to='/product' className={({ isActive }) => isActive ? 'btn active cursor-pointer text-lime-400' : 'cursor-pointer hover:text-lime-400 transition-all duration-300'}>Product</NavLink>
                        <NavLink to='/cart' className={({ isActive }) => isActive ? 'btn active cursor-pointer text-lime-400 group' : 'cursor-pointer hover:text-lime-400 transition-all duration-300 group'}>
                            <div className='flex justify-center items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                                <span className="flex items-center justify-center text-white px-2 text-sm sm:text-base font-medium rounded-4xl border-2 border-lime-400 bg-lime-400 transition-colors duration-300 group-hover:text-lime-400 group-hover:bg-transparent">
                                    {totalQuantity}
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <CategoryMenu variant="nav"/>
        </div>
    )
}

export default Navbar;