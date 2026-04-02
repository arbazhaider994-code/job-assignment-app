import { useNavigate } from 'react-router-dom'
import heroImg from '../assets/heroImg.jpeg'

// import styling
import './Hero.css'

const Hero = () => {
    const navigate = useNavigate();
    const handleExploreEvent =() => {
    navigate('/events');
}
    return(
    <div className="hero-info-Container text-white" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="hero-info">                        
            <h1>Discover Amazing Events Near You </h1>
            <p className='d-none d-md-block'>Welcome to our event platform—your one-stop destination for finding and creating unforgettable experiences. Whether you're looking for concerts, workshops, conferences, or social gatherings, we bring everything together in one place.</p>
            <p className='d-none d-sm-block d-md-none'>Welcome to our event platform your one-stop destination for finding and creating unforgettable experiences.</p>
                <button className="seeEventBtn" onClick={handleExploreEvent}>Explore Events</button>
        </div>
    </div>
    );
}
export default Hero;