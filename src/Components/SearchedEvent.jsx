import { useLocation } from "react-router-dom";
import eventData from "../assets/eventData";
import EventCard from "./EventCard";
import { IoTrashBin } from "react-icons/io5";

// import styling
import './Events.css'


const SearchedEvent = () => {
    const location = useLocation();
    const city = location.state?.city || "";
    const searchedCityEvents = eventData.filter((event) => 
        event.city.toLowerCase().includes(city.toLowerCase())
    )
    return(
        <div className="search-Event-Container py-4 my-2 mt-3">
            <h4 className="px-3 mx-4"><strong>Result: </strong>for search event by city :<strong> {city} </strong></h4>
        {searchedCityEvents.length === 0 ? 
        (<h3 className="noEventFind text-center mt-5">No Events Found in Search City<IoTrashBin className="noEventIcon" /></h3>)
        :
        <EventCard filteredEvents={searchedCityEvents}/>   
        } 
        </div>
    );
}
export default SearchedEvent;