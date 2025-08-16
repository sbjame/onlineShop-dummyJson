const HeroSection = () =>{
    return (
        <div className={`relative flex justify-baseline items-center h-80 md:h-150 bg-[url('/img/iphone13pro.jpg')] bg-center bg-cover`}>
            <div className="flex flex-col justify-center items-baseline pl-4 lg:pl-16 max-w-none lg:max-w-[50vw] h-full bg-gradient-to-r from-white to-white/0">
                <div className="bg-red-600 text-white px-2 text-xl sm:text-2xl py-0.5">Best Prices</div>
                <h1 className="text-3xl xl:text-8xl sm:text-6xl">Incredible Prices on All Your Favorite Items</h1>
                <h2 className="text-xl sm:text-3xl font-light">Get more for less on selected brands</h2>
                <button className="cursor-pointer rounded-4xl bg-lime-400 text-white text-xl font-normal py-2 px-4 md:py-4 md:px-12 text-center mt-2 border-2 border-lime-400 hover:text-lime-400 hover:bg-transparent transition-all duration-300">Shop Now</button>
            </div>
        </div>
    )
}

export default HeroSection