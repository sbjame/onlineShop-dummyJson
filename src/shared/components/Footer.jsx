import CategoryMenu from './CategoryMenu';
import { NavLink } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className="bg-white grid grid-cols-2 sm:flex justify-around gap-4 p-4 border sm:p-8">
            <div className="left flex flex-col gap-2 sm:gap-4 text-sm sm:text-base">
                <h1 className='font-medium text-xl sm:text-2xl'>Store Location</h1>
                <h2>Bangkok, Thailand</h2>
                <h2>surawut.workk@gmail.com</h2>
                <h2>092-629-7525</h2>
                <div className="social flex justify-between items-center gap-6 w-40 md:w-50">
                    <a href="https://www.facebook.com/jamelnwzaa007/">
                        <img src='../img/logo/fb.png' alt="FaceBook"/>
                    </a>
                    <a href="https://www.instagram.com/s.jame_7/">
                        <img src='../img/logo/ig.png' alt="Instagram" />
                    </a>
                    <a href="https://github.com/sbjame">
                        <img src='../img/logo/github.png' alt="Github" />
                    </a>
                </div>
            </div>
            <div className="middle flex flex-col flex-wrap gap-2 sm:gap-4">
                <h1 className='font-medium text-xl sm:text-2xl'>Shop</h1>
                <CategoryMenu variant='footer'/>
            </div>
            <div className="right flex flex-col gap-2 sm:gap-4 text-sm sm:text-base">
                <h1 className='font-medium text-xl sm:text-2xl'>Policy</h1>
                <NavLink to='/Policy'>Shipping & Returns</NavLink>
                <NavLink to='/Policy'>Terms & Conditions</NavLink>
            </div>
        </div>
    )
}

export default Footer