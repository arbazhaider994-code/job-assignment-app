// import styling
import './ContactUs.css'
const Form = () => {
    return(
        <div className="container-fluid bg-dark text-white formContainer">
            <div className="row">
                <div className="col-12 formHeading">
                    <h2>Submit Your Query</h2>
                    <hr />
                </div>
                <div className="col-12">
        <div className="contactForm">    
        <div className="nameContainer mb-3">
            <label htmlFor="name" className="form-label">Enter Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
        </div>    
        <div className="emailContainer mb-3">
            <label htmlFor="email" className="form-label">Enter Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
        </div>
        <div className="messageContainer mb-3">
            <label htmlFor="message" className="form-label">Your Message For Us:</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <button className="btn formBtn">Sumbit Now</button>
    </div>
    </div>
    </div>
    </div>
    );
}
export default Form;