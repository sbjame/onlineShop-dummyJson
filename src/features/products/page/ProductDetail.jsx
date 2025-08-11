import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../cart/cartSlice';
import Api from '../../../api/ProductApi';

const ProductDetail = ({ onAddToCart = () => { } }) => {
    const dispatch = useDispatch();

    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(addItem({ product, quantity }));
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await Api.get('/products?limit=194');
                const allProducts = res.data.products;
                const foundProduct = allProducts.find(p =>
                    encodeURIComponent(p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')) === slug
                );
                setProduct(foundProduct);
            } catch (error) {
                console.error('Loading Error: ', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [slug]);

    return (
        <div className='relative'>
            <div className='m-auto flex flex-col items-center justify-center p-4 md:p-16 bg-gray-200'>
                <div className="flex flex-col gap-6">
                    <div className='left flex flex-wrap gap-8 justify-center items-center'>
                        {product?.images?.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`${product?.title} Image ${index + 1}`} className='w-100 h-auto' />
                        ))}
                    </div>
                    <div className="right flex flex-col xl:flex-row justify-between gap-4 sm:gap-16 border-gray-400 border-t px-4 py-8">
                        <div className='flex flex-col gap-4 flex-auto max-w-[100vw] xl:max-w-[50vw]'>
                            <div className='flex flex-col space-y-2 max-w-full xl:max-w-[50vw]'>
                                <div className='flex flex-col md:flex-row gap-2 justify-between items-center'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-xl md:text-3xl'>{product.title}</h1>
                                        <div className='flex gap-4'>
                                            <h2 className='text-2xl line-through text-lime-400'>${product.price}</h2>
                                            <h2 className='text-2xl text-lime-400'>${((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)}</h2>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center border-2 border-lime-400 p-1 md:p-2 rounded-4xl">
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => {
                                                const value = parseInt(e.target.value);
                                                setQuantity(isNaN(value) ? 1 : value);
                                            }}
                                            className="w-40 sm:w-20 px-2 py-1 text-center outline-none"
                                        />
                                        <button onClick={handleAddToCart} className='flex justify-center items-center text-center text-base md:text-xl font-medium gap-4 rounded-4xl bg-lime-400 px-2 py-1 md:px-4 md:py-2 cursor-pointer group transition duration-300 hover:scale-110 hover:drop-shadow-xl hover:drop-shadow-gray-600/20'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-lime-400 border border-lime-400 p-1 w-8 h-8 rounded-full icon icon-tabler icons-tabler-outline icon-tabler-plus group-hover:rotate-180 group-hover:p-0 transition duration-300"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                                            <p>ADD</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>{product.description}</div>
                        </div>
                        <div className='bg-white rounded py-4 px-4 md:px-8'>
                            <div className='text-2xl text-black font-medium'>Reviews</div>
                            {product?.reviews?.map((review, index) => (
                                <div key={index} className='flex flex-col gap-2 my-4 p-2 bg-gray-100 rounded'>
                                    <div className='flex justify-between bg-gray-300 p-2 rounded'>
                                        <div className='flex gap-4 justify-between items-center text-center'>
                                            <h1 className='text-base md:text-xl text-black'>{review.reviewerName}</h1>
                                            <h2 className='text-sm text-gray-400'>{review.reviewerEmail}</h2>
                                        </div>
                                        <div className="rating flex gap-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-500"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
                                            <h2>{review.rating}</h2>
                                        </div>
                                    </div>
                                    <h2 className='text-sm md:text-base p-2'>{review.comment}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {loading && (
                <div className="absolute inset-0 z-5000 bg-white/40 w-[100vw] h-[100vh] backdrop-blur-sm flex items-center justify-center">
                    <p className="text-xl font-medium text-gray-700 animate-pulse">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;