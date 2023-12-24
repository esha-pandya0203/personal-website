import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactIcons from '../components/ContactIcons';
import Image from 'react-bootstrap/Image';
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from 'react';

export default function Contact() {
    const emailForm = useRef(); 
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    
    useEffect(() => emailjs.init('ALUiD-R82tNY9E75S'), []);

    const handleSubmitEmail = (e) => {
        e.preventDefault(); 

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        const templateParams = {
            name: name, 
            message: message, 
            subject: subject, 
            email: email, 
        }

        emailjs.send('service_d2aydmm', 'template_2ops2ie', templateParams,
        'ALUiD-R82tNY9E75S')
        .then((result) => {
            window.alert('Thank you for contacting me! I will reach out to you as soon as possible.')
        }, (error) => {
            window.alert('There was an error. Please try submitting the form again!');
        })
        .finally(() => {
            emailForm.current.reset();
        }); 
    }

    return (
        <div>
            <div className='contact rounded-container' id='contact'>
                <h2 className='contact-header'>Contact Me!</h2>
                <Form className='contact-form' ref={emailForm} onSubmit={handleSubmitEmail}>
                    <div className='email-info'>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Control className='input-field' ref={nameRef} type='text' placeholder='Name:' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formEmail'>
                            <Form.Control className='input-field' ref={emailRef} type="email" placeholder='Email:' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formSubject'>
                            <Form.Control className='input-field' ref={subjectRef} type='text' placeholder='Subject:' />
                        </Form.Group>
                    </div>
                    <div className='email-message'>
                        <Form.Group className='mb-3' controlId='formMessage'>
                            <textarea className='input-field message-field' ref={messageRef} type='text' placeholder='Message: '/>
                        </Form.Group>
                        <Button type="submit" className='email-send-btn'>
                            Send!
                        </Button>
                    </div>
                </Form>
                <ContactIcons />
            </div>
            <div className='footer'>
                <Image src={process.env.PUBLIC_URL + '/images/c-circle.svg'} className='copyright-image' alt='copyright' rounded/>
                <h6 className='footer-text'>Esha Pandya 2023</h6>
            </div>
        </div>
  );
}