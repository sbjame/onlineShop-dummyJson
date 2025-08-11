import { useDispatch } from "react-redux";
import { clearCart } from "../cartSlice"
import AddressToDelivery from "./AddressToDelivery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
    });

    const handleCheckout = () => {
        const isEmpty = Object.values(formData).some((value) => value.trim() === "");
        if (isEmpty) {
            alert("Please fill in all field");
            return;
        }

        alert(
            `Shipping information\n` +
            `Name: ${formData.firstName}\n` +
            `Lastname: ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Address: ${formData.address}\n` +
            `postcode: ${formData.postcode}\n\n` +
            `Thank you for Buying!`
        );

        dispatch(clearCart()); alert

        navigate('/')
    }

    return (
        <div>
            <AddressToDelivery formData={formData} setFormData={setFormData} />
            <div className='text-center p-4 w-full cursor-pointer rounded-[999px] border-8 border-lime-400 bg-lime-400 hover:bg-transparent hover:drop-shadow-2xl group transition-all duration-300 ease-in-out' onClick={handleCheckout}>
                <button className='text-white font-medium text-2xl group-hover:text-lime-400 cursor-pointer'>Checkout</button>
            </div>
        </div>
    )
}

export default Checkout