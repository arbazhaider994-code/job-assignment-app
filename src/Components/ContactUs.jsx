import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// import styling 
import './ContactUs.css'

import Form from "./Form";
const ContactUs = () => {
    return(
    <div className="contactUsContainer">
        <div className="contactUsHeading text-center mt-3">
            <h1>Contact Us</h1>
            <hr/>
        </div>
        <div className="contact-Container">
            <div className="contactInfo">
                        <h2 className="mb-4">Dynamics 360 (Private) Limited</h2>
                        <div className="phoneNum d-flex mt-3 mb-2">
                            <p className="phone"><FaPhoneAlt className="phoneIcon"/></p>
                            <p className="contactDetails">051-2301111</p>
                        </div>    
                        <div className="ourLocation d-flex mt-2">
                            <p className="location"><FaLocationDot className="locationIcon"/></p>
                            <p className="contactDetails">5th Floor, Golden Heights, Business Square, Gulberg Greens Islamabad</p>
                        </div>                            
                    </div>
                <div className="locationImg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.580229094339!2d73.16694627441001!3d33.61619444063131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed59bad84d43%3A0xfa4cd72fa7a2193c!2sDynamics%20360%20(Private)%20Limited!5e0!3m2!1sen!2s!4v1774978003792!5m2!1sen!2s" width={420} height={320} style={{border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                <Form/>
            </div>
    );
}
export default ContactUs;