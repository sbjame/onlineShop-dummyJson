import useProducts from '../../../hooks/useProducts';
import '../styles/ProductLists.css';
import ProductCard from './ProductCard';
import SidebarFilter from './SidebarFilter';

const ProductList = ()=> {
    const {  categories, filtered, loading } = useProducts();

    return (
        <div className='relative'>
            <div className='flex flex-col md:flex-row justify-between px-2 md:p-4 bg-gray-200'>
                <SidebarFilter categories={categories}/>
                <div className='left flex flex-col py-2 sm:py-12 px-0 md:px-4 w-full md:w-[80vw]'>
                    <h1 className='text-6xl text-black font-medium'>Product list</h1>
                    <h1 className='text-base text-black font-light mt-10 mb-2'>{filtered.length} Products</h1>
                    <ul className='flex flex-wrap w-full gap-1'>
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