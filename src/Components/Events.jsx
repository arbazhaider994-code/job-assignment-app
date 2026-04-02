import { useState } from "react";
import eventData from "../assets/eventData";
import { IoTrashBin } from "react-icons/io5";
import EventCard from "./EventCard";

// import styling
import './Events.css'

const Events = () => {
    const [filteredCity, setFilteredCity] = useState('');
    const handleFilteredCity = (e) => {
        const cityName = e.target.value;
        setFilteredCity(cityName)
    }
    const filteredEvents = eventData.filter((event) =>  {
       return filteredCity === "" || event.city === filteredCity;
    });    

    return(
    <div className="container-fluid mt-4">
        <div className="row eventHeader">
            <div className="col-6 mt-4 px-5 eventsHeading">
                <h2>UPCOMING EVENT</h2>
            </div>
            <div className="col-6 mt-4 mb-3 px-5 eventSort text-end"> 
                    <select name="cities" id="" className="citiesList"  onChange={(e) => handleFilteredCity(e)}>
                        <option value="" placeholder="Select City" className="option">Select City</option>
                        <option value="Islamabad" className="option">Islamabad</option>
                        <option value="Rawalpindi" className="option">Rawalpindi</option>
                        <option value="Karachi" className="option">Karachi</option>
                        <option value="Lahore" className="option">Lahore</option>
                    </select>
            </div>
            </div>
            {filteredEvents.length === 0 ?
             (<h3 className="noEvent text-center mt-5">No Events Found in Selected City<IoTrashBin className="noEventIcon" /></h3>) :
                   <EventCard filteredEvents={filteredEvents}/> 
            }
        </div>
    );
}
export default Events;