const TotalAmout = ({subTotal}) =>{
    const deliveryFeeCal = (subTotal) => (subTotal > 0 && subTotal < 51 ? 10 : 0);
    
    const vat = () => {
        const vatBase = subTotal + deliveryFeeCal(subTotal);
        const vatAmount = vatBase * 0.07;
        return vatAmount;
    };
    
    const TotalAmount = () =>{
        const totalAmount = subTotal + deliveryFeeCal(subTotal) + vat();
        return totalAmount;
    }

    return(
        <div className='flex flex-col gap-8'>
            <h1 className='text-3xl py-8 border-b border-gray-300'>Order Summary</h1>
            <div className='px-4 flex justify-between'>
                <h2>Subtotal</h2>
                <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className='px-4 flex justify-between'>
                <h2>Delivery fee</h2>
                <span>${deliveryFeeCal(subTotal)}</span>
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