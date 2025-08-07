const HeroSection = () =>{
    return (
        <div className="relative flex justify-baseline items-center h-[60vh] bg-[url(./img/iphone13pro.jpg)]">
            <div className="flex flex-col justify-center items-baseline pl-16 max-w-[50vw] h-full bg-gradient-to-r from-white to-white/0">
                <div className="bg-red-600 text-white px-2 text-2xl py-0.5">Best Prices</div>
                <h1 className="text-8xl">Incredible Prices on All Your Favorite Items</h1>
                <h2 className="text-2xl font-light">Get more for less on selected brands</h2>
                <button className="cursor-pointer rounded-4xl bg-lime-400 text-white text-xl font-normal py-4 px-12 text-center mt-2 border-2 border-lime-400 hover:text-lime-400 hover:bg-transparent transition-all duration-300">Shop Now</button>
            </div>
        </div>
    )
}

export default HeroSection