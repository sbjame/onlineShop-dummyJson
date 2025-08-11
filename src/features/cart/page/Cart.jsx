import CartList from '../components/CartList';
import TotalAmout from '../components/TotalAmount';
import Checkout from '../components/Checkout';

const Cart = () => {
    return (
        <div className='flex flex-col flex-wrap justify-center items-center m-auto py-4 gap-8'>
            <CartList/>
            <div className='flex flex-col gap-8 p-4 w-[94vw] md:w-[80vw] bg-gray-100'>
                <TotalAmout/>
                <Checkout/>
            </div>
        </div>
    )
}

export default Cart