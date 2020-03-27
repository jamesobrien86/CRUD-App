import React, {Component} from 'react';
import ContactForm from '../components/contact-form';

class ContactFormPage extends Component{
    render(){
        return(
            <div>
                <h1>Contact Form</h1>
                <ContactForm />
            </div>
        )
    }
}

export default ContactFormPage;