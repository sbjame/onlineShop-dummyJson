import { useState } from 'react';
import '../styles/Address.css'

const AddressToDelivery = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    

    return (
        <div className="address px-4 pt-4 border-t border-gray-300">
            <h2 className='text-2xl'>Address</h2>
            <div className="py-8 grid grid-cols-2 gap-4">
                <input required name="firstName" className='border' type="text" placeholder="First name" value={formData.firstName} onChange={handleChange} />
                <input required name="lastName" className='border' type="text" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
                <input required name="email" className='border' type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input required name="phone" className="border" type="tel" placeholder="Tel" value={formData.phone} onChange={handleChange} />
                <input required name="address" className='border' type="text" placeholder="Address" value={formData.address} onChange={handleChange} />
                <input required name="postcode" className='border' type="number" placeholder="Postcode" value={formData.postcode} onChange={handleChange} />
            </div>
        </div>
    )
}

export default AddressToDelivery