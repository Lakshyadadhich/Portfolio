import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            // Send email to your address
            emailjs
                .sendForm(
                    'service_fg4p9bq', // Replace with your actual service ID
                    'template_652ced4', // Replace with your actual template ID
                    form.current,
                    'TRDY5Ge6ioqJsCRfq' // Replace with your actual public API key
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                        // Clear form fields
                        setFormData({
                            from_name: '',
                            reply_to: '',
                            message: ''
                        });
                        // Optionally reset the form as well
                        form.current.reset(); 
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="from_name"
                            className="user"
                            placeholder="Name"
                            value={formData.from_name} // Add value for controlled input
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="reply_to"
                            className="user"
                            placeholder="Email"
                            value={formData.reply_to} // Add value for controlled input
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            className="user"
                            placeholder="Message"
                            value={formData.message} // Add value for controlled input
                            onChange={handleChange}
                        />
                        <span className="not-done">{notDone && "Please, fill all the input fields"}</span>
                        <Button type="submit" className="button" disabled={done}>Send</Button>
                        <span className="done">{done && "Thanks for contacting me! I have received your message."}</span>
                    </form>
                </Col>
                {/* <Social/> */}
            </Row>
        </Container>
    );
};

export default Contact;
