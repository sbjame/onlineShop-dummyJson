import HeroSection from '../components/HeroSection'
import SpacialDeals from '../components/SpacialDeals'
import ServiceHighlight from '../components/ServiceHighlights'
import BestRated from '../components/BestRated'

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <div className='bg-gray-300 p-8 flex flex-col flex-wrap gap-8'>
                <SpacialDeals/>
                <ServiceHighlight/>
                <BestRated/>
            </div>
        </div>
    )
}

export default Home