import { useState } from "react";
import '../../styles/Address.css'

const AddressToDelivery = () => {
    const [phone, setPhone] = useState('');

    return (
        <div className="px-4 pt-4 border-t border-gray-300">
            <h2 className='text-2xl'>Address</h2>
            <div className="py-8 grid grid-cols-2 gap-4">
                <input required name="name" className='border' type="text" placeholder="Name"/>
                <input required name="surname" className='border' type="text" placeholder="Surname"/>
                <input required name="email" className='border' type="email" placeholder="Email"/>
                <input required name="phone" className="border" type="tel" placeholder="Tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input required name="address" className='border' type="text" placeholder="Address"/>
                <input required name="postcode" className='border' type="number" placeholder="Postcode"/>
            </div>
        </div>
    )
}

export default AddressToDelivery