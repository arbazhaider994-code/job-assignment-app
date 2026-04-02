import { useRef } from 'react';
import logo from '../assets/logo.jpg'
import { TiThMenu } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';

// import styling
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    const searchEvent = useRef('');
    const handleSearchEvent = () => {
        const searchCity = searchEvent.current.value;
        navigate('/searchedEvents', {
            state: {
                city: searchCity
            }
        })
    }
   return(
    <>
     <div className="container-fluid">
        <div className="row navbar">
            <div className="col-2" >
               <div className="logoContainer"> 
                <img src={logo} alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="d-none d-sm-block col-4">
                <div className="linksContainer">
                    <Link to="/home" className='nav-link'>Home</Link>
                    <Link to="/events" className='nav-link'>Events</Link>     
                    <Link to="/contact-us" className='nav-link'>Contact</Link>
                </div>
            </div>
            <div className="col-4 d-sm-none dropdown">
                 <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                 <TiThMenu />
                 </button>
                <ul className="dropdown-menu">
                <Link to='/home' className='nav-link'><p>Home</p></Link>
                <Link to='/events' className='nav-link'><p>Events</p></Link>
                <Link to='/contact-us' className='nav-link'><p>Contact Us</p></Link>
                </ul>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <div className="searchEvent d-flex gap-2">
                    <input ref={searchEvent} type="text" placeholder='Search By City' />
                    <button className="searchBtn" onClick={handleSearchEvent}>Search</button>
                </div>
            </div>
        </div>
    </div>
    </>
   );
}
export default Navbar;