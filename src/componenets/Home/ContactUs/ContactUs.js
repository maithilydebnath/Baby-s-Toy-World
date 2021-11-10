import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
          <div>
              <h3 className="text-primary">Contact Us</h3>
                <h4 className="m-0 p-4 bg-color"><b>Travel & Explore,Leumeah NSW-2560</b></h4>
                <h6 className="m-2">Phone: (02) 9871 2982</h6>
                <h6>Email: information@travelExplor.com</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.068967188425!2d150.83084619054947!3d-34.05438150569621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12eebf89e270b1%3A0x5017d681632be10!2sLeumeah%20NSW%202560!5e0!3m2!1sen!2sau!4v1634718071957!5m2!1sen!2sau" ></iframe>
          </div>   
        </div>
    );
};

export default ContactUs;