const SpacialDeal = () => {
    return(
        <div className="flex flex-col lg:flex-row gap-2 md:gap-8">
            <div className="right p-4 md:p-20 bg-[url(./img/redPhone.avif)] bg-cover bg-center h-150 text-white flex flex-col w-full items-baseline justify-center gap-4">
                <div className="text-2xl font-light">Holyday Deals</div>
                <h1 className="text-4xl 2xl:text-6xl font-bold">Up to 19% off</h1>
                <h2 className="text-2xl font-light">Selected Smartphoome Brands</h2>
                <button className="cursor-pointer rounded-4xl bg-white text-red-600 text-base font-normal py-4 px-8 text-center mt-2 border-2 border-white hover:text-white hover:bg-transparent transition-all duration-300">Shop Now</button>
            </div>
            <div className="left p-4 md:p-20 bg-[url(./img/purpleheadphone.png)] bg-cover bg-center h-150 text-white flex flex-col w-full items-baseline justify-center gap-4">
                <div className="text-2xl font-light">Just in</div>
                <h1 className="text-4xl 2xl:text-6xl font-bold">Take Your Sound Anywhere</h1>
                <h2 className="text-2xl font-light">Top Headphone Brands</h2>
                <button className="cursor-pointer rounded-4xl bg-white text-purple-600 text-base font-normal py-4 px-8 text-center mt-2 border-2 border-white hover:text-white hover:bg-transparent transition-all duration-300">Shop Now</button>
            </div>
        </div>
    )
}

export default SpacialDeal