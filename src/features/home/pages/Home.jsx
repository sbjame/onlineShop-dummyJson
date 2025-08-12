import HeroSection from '../components/HeroSection'
import SpacialDeals from '../components/SpacialDeals'
import ServiceHighlight from '../components/ServiceHighlights'
import BestRated from '../components/BestRated'
import useProducts from '../../../hooks/useProducts'

const Home = () => {
    const { loading } = useProducts();
    
    return (
        <div>
            <HeroSection />
            <div className='bg-gray-300 p-2 md:p-8 flex flex-col flex-wrap gap-2 sm:gap-8'>
                <SpacialDeals />
                <ServiceHighlight />
                <BestRated />
            </div>
            {loading && (
                <div className="absolute inset-0 z-50 bg-white/40 w-[100vw] h-[100vh] backdrop-blur-sm flex items-center justify-center">
                    <p className="text-xl font-medium text-gray-700 animate-pulse">Loading...</p>
                </div>
            )}
        </div>
    )
}

export default Home;