// import styling
import './Events.css'

const EventCard = ({filteredEvents}) => {
    return(
        <div className="container-fluid">        
        <div className="row cardsContainer justify-content-center">    
         {filteredEvents.map((event) => (
             <div className="col-md-8 col-12 mt-3 mb-4" key={event.name}>
                <div className="card event h-100">
                    <div className="cardImg">
                        <img src={event.img} className="img-fluid h-100 w-100" alt="Event_Image_Here" />
                  </div>
                    <div className="eventInfo">
                        <div className="eventTitle">    
                            <h4 className="eventName ">{event.name}</h4>
                        </div>
                        <div className="description">
                            <p><strong>Event Description:</strong><br/>{event.description}</p>
                        </div>
                        <p className="date"><strong>Date: </strong>{event.date}</p>
                        <p className="time"><strong>Time: </strong>{event.time}</p>
                        <p className="location"><strong>Location:<br/></strong>{event.location}</p>
                        <button className="btn btn-dark btnRegister mt-auto">Register Now</button>
                    </div>
                </div>
            </div>
         ))}   
            </div>
            </div>
    );
}
export default EventCard;