import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { removeItem } from "../cartSlice";
import useProducts from "../../../hooks/useProducts";

const CartList = () => {
    const { items } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const goToProductDetail = (product) => {
        const slug = product.title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/product/${product.category}/${slug}`)
    };

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className='text-4xl font-bold'>Your Cart</h1>
            <div className=' flex flex-col text-2xl gap-2 sm:gap-8 p-2 sm:p-8 w-[94vw] md:w-[80vw] bg-gray-100'>
                <div className='grid grid-cols-[40px_1fr_50px_50px_30px] sm:grid-cols-[120px_1fr_80px_120px_30px] p-0 sm:p-4 text-xs sm:text-xl font-medium border-b border-gray-300 pb-2'>
                    <div className='text-center'>Img.</div>
                    <div className='text-center'>Name</div>
                    <div className='text-center'>Qty.</div>
                    <div className='text-center'>Price</div>
                    <div></div>
                </div>
                {items.length === 0 ? (
                    <p className='m-auto'>Your cart is empty.</p>
                ) : (
                    items.map(item => (
                        <div key={item.product.id} className='grid grid-cols-[40px_1fr_50px_50px_30px] sm:grid-cols-[120px_1fr_80px_120px_30px] items-center p-0 sm:p-4 bg-gray-300 font-medium text-xs sm:text-xl lg:text-2xl'>
                            <div className='w-10 sm:w-20 md:w-30'>
                                <img onClick={() => goToProductDetail(item.product)} src={item.product.thumbnail} alt="Product Image" className='w-30 h-auto object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer' />
                            </div>
                            <div onClick={() => goToProductDetail(item.product)}>{item.product.title}</div>
                            <div className='text-center'>{item.quantity}</div>
                            <div className='text-center'>${item.totalPrice.toFixed(2)}</div>
                            <button className='flex justify-center' onClick={() => dispatch(removeItem(item.product.id))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash-x bg-red-600 p-1 border border-red-600 text-gray-200 rounded-4xl hover:bg-transparent hover:text-red-600 cursor-pointer transition-all duration-300 ease-in-out"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" /></svg>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CartList