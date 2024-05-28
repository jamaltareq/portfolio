import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contactus() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_8emvjtu';
        const templateId = 'template_bibhbrm';
        const publicKey = 'X2vTOvGsJqtXcUoOi';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Web Wizard',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <div className=" position-relative container" >
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110045.83150983091!2d31.318218851472814!3d30.466357446096037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1710977205695!5m2!1sen!2seg" width="100%" height="300px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="  row m-5">
                <div className="col-lg-5">
                    <h1 className="fw-bolder display-3">Contact</h1>
                    <p className=''>Let's stay in touch so we can create the absolute best website for you. Your input and feedback will be invaluable throughout the process. Together, we'll bring your vision to life with precision and excellence.</p>
                </div>
                <div className="col-lg-7">

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">name*</label>
                        <input type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='edited form-control mb-3' />
                        <label htmlFor="email">email*</label>
                        <input type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='edited form-control mb-3' />
                        <label htmlFor="content">content*</label>
                        <textarea value={message}
                            onChange={(e) => setMessage(e.target.value)} className='edited form-control  ' style={{ height: '100px', maxHeight: '150px' }} />
                        <br />
                        <div className="d-flex">
                            <button type="submit" className=" text-white btn  btn-e px-2 py-1"> <i className="fa-solid fa-envelope me-2 fs-5"></i>Send</button>
                            <a href="mailto:gamal.tarek.1907@gmail.com" className=" text-white btn  btn-e px-2 py-1 ms-3"> <i className="fa-solid fa-paper-plane me-2 fs-5"></i>Get In Touch</a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
