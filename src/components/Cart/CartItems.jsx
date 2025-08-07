const CartItems = ({cart, removeFromCart}) =>{
    const { cart, removeFromCart } = useCart();

    const goToProductDetail = ( category, slug ) => {
        const replaceCategory = category.toLowerCase().replace(/\s+/g, '-');
        const replaceslug = slug.toLowerCase().replace(/\s+/g, '-');
        navigate(`/product/${replaceCategory}/${replaceslug}`)
    };

    return(
        <div>
            <h1 className='text-4xl font-bold'>Your Cart</h1>
            <div className='flex flex-col text-2xl font-light gap-8 p-8 w-[80vw] bg-gray-100'>
                <div className='flex text-xl font-medium border-b border-gray-300 pb-2'>
                    <div className='w-1/5 pl-12'>Img.</div>
                    <div className='w-2/5'>Name</div>
                    <div className='w-1/12 text-center'>Qty.</div>
                    <div className='w-1/5 text-center'>Price</div>
                    <div className='w-1/12 text-right'></div>
                </div>
                {cart.length === 0 ? (
                    <p className='m-auto'>Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className='flex items-center p-4 bg-gray-300'>
                            <div className='w-1/5'>
                                <img onClick={() => goToProductDetail(item.category, item.title)} src={item.thumbnail} alt="Product Image" className='w-30 h-30 object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer'/>
                            </div>
                            <div onClick={() => goToProductDetail(item.category, item.title)} className='w-2/5 cursor-pointer hover:text-gray-600'>{item.title}</div>
                            <div className='w-1/12 text-center'>{item.quantity}</div>
                            <div className='w-1/5 text-center'>${((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)}</div>
                            <button className='w-1/12 flex justify-end' onClick={() => removeFromCart(item.id)}>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash-x bg-red-600 p-1 border border-red-600 text-gray-200 rounded-4xl hover:bg-transparent hover:text-red-600 cursor-pointer transition-all duration-300 ease-in-out"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" /></svg>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CartItems