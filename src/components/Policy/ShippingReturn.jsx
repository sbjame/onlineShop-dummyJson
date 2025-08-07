const ShippingReturn = () => {
    return(
        <div className="flex flex-col justify-center items-center gap-16 m-auto">
            <h1 className="text-5xl font-medium text-black text-center border-b border-gray-500 p-20 w-[90%]">Shipping & Return</h1>
            <div className="flex flex-col justify-center items-center text-center gap-8 max-w-[60%] text-black text-xl font-light">
                <h2 className="text-4xl font-medium text-black">Shipping Policy</h2>
                <p>
                    I’m a Customer Care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.
                </p>
                <p>
                    I'm the second paragraph in your Shipping Policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-8 max-w-[60%] text-black text-xl font-light">
                <h2 className="text-4xl font-medium text-black">Return & Exchange Policy</h2>
                <p>
                    I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                </p>
                <p>
                    Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!
                </p>
            </div>
        </div>
    )
}

export default ShippingReturn