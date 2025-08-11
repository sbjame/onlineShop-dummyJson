import { useSelector } from "react-redux";

const TotalAmout = () =>{
    const { totalPrice } = useSelector(state => state.cart);
    const deliveryFeeCal = (totalPrice) => (totalPrice > 0 && totalPrice < 51 ? 10 : 0);
    
    const vat = () => {
        const vatBase = totalPrice + deliveryFeeCal(totalPrice);
        const vatAmount = vatBase * 0.07;
        return vatAmount;
    };
    
    const TotalAmount = () =>{
        const totalAmount = totalPrice + deliveryFeeCal(totalPrice) + vat();
        return totalAmount;
    }

    return(
        <div className='flex flex-col gap-8'>
            <h1 className='text-3xl py-8 border-b border-gray-300'>Order Summary</h1>
            <div className='px-4 flex justify-between'>
                <h2>Subtotal</h2>
                <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='px-4 flex justify-between'>
                <h2>Delivery fee</h2>
                <span>${deliveryFeeCal(totalPrice)}</span>
            </div>
            <div className='px-4 flex justify-between'>
                <h2>Vat 7%</h2>
                <span>${vat().toFixed(2)}</span>
            </div>
            <div className='px-4 flex justify-between'>
                <h2>Total</h2>
                <span>${TotalAmount().toFixed(2)}</span>
            </div>
        </div>
    )
}

export default TotalAmout