import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) =>{
    const dispatch = useDispatch();

    const handleAddToCart = () =>{
        dispatch(addItem({product, quantity}));
    }
        
    const [ quantity , setQuantity ] = useState(1);
    const navigate = useNavigate();

    const slug = product.title.toLowerCase().replace(/\s+/g, '-');
    const category = product.category;

    const goToProductDetail = () => {
        navigate(`/product/${category}/${slug}`)
    };

    return(
        <li key={product.id} className='card relative flex flex-col flex-auto w-[32vw] sm:w-60 justify-between gap-2 mb-8 cursor-pointer'>
            <h2 className='absolute top-2 left-2 py-1 px-4 rounded-4xl text-white bg-red-600 text-base font-light'>SALE</h2>
            <div className='p-4 bg-white rounded flex justify-center items-center'>
                <img onClick={goToProductDetail} src={product.thumbnail} alt={product.title + ' Image'} className='w-auto h-auto'/>
            </div>
            <h1 className='text-sm sm:text-base font-medium'>{product.title}</h1>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div className="flex flex-auto gap-2 text-xl md:text-2xl">
                    <h2 className='text-lime-500 font-light text-sm sm:text-base line-through'>${product.price}</h2>
                    <h2 className='text-lime-500 font-meduim text-sm sm:text-base'>${((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)}</h2>
                </div>
                <div className="flex flex-auto justify-end gap-2 items-center">
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setQuantity(isNaN(value) ? 1 : value);
                        }}
                        className="w-10 md:w-16 px-2 py-1 border-b border-lime-400 text-center outline-0"
                        />
                    <button onClick={handleAddToCart}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="plus cursor-pointer bg-lime-400 border border-lime-400 p-1 w-8 h-8 rounded-full icon icon-tabler icons-tabler-outline icon-tabler-plus hover:rotate-180 hover:p-0 transition duration-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ProductCard;