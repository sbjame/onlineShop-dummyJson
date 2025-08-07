const SpacialDeal = () => {
    return(
        <div className="flex gap-8">
            <div className="right p-20 bg-[url(./img/redPhone.avif)] bg-cover bg-center h-150 max-w-[48vw] w-full text-white flex flex-wrap flex-col items-baseline justify-center gap-4">
                <div className="text-2xl font-light">Holyday Deals</div>
                <h1 className="text-6xl font-bold">Up to 19% off</h1>
                <h2 className="text-2xl font-light">Selected Smartphoome Brands</h2>
                <button className="cursor-pointer rounded-4xl bg-white text-red-600 text-md font-normal py-4 px-8 text-center mt-2 border-2 border-white hover:text-white hover:bg-transparent transition-all duration-300">Shop Now</button>
            </div>
            <div className="left p-20 bg-[url(./img/purpleheadphone.png)] bg-cover bg-center h-150 max-w-[48vw]  w-full text-white flex flex-wrap flex-col items-baseline justify-center gap-4">
                <div className="text-2xl font-light">Just in</div>
                <h1 className="text-6xl font-bold">Take Your Sound Anywhere</h1>
                <h2 className="text-2xl font-light">Top Headphone Brands</h2>
                <button className="cursor-pointer rounded-4xl bg-white text-purple-600 text-md font-normal py-4 px-8 text-center mt-2 border-2 border-white hover:text-white hover:bg-transparent transition-all duration-300">Shop Now</button>
            </div>
        </div>
    )
}

export default SpacialDeal