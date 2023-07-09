import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../Header';
import contact from '../../assets/images/contact.jpg'
import { Container, Row, Col,Form,Button} from 'react-bootstrap'
import Footer from '../Footer';
const Contactpage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8t82r3f', 'template_kz4m0zk', form.current, 'OtmFwmT72U9GIavs9')
      .then((result) => {
        console.log(result.text);
        alert('message Sent');
        console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
        <Header />
          <div className="about-page">
             <Container>
               <Row className='align-items-center'>
                  <Col md= {6}>
                    <img src= {contact} alt='contact' className='img-fluid' />
                  </Col>
                  <Col md= {6}>
                        <div className="contact-form">
                        <h2 className='mb-4'>Write Your Feedback</h2>
                            <Form  ref={form} onSubmit={sendEmail}>
                                <Form.Group className="mb-4">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" name="from_name" placeholder="EnterYour Full Name" required />
                                  </Form.Group>
                                  <Form.Group className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="user_email" placeholder="Enter Your Email" required/>
                                  </Form.Group>
                                  <Form.Group className="mb-4">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea"  name="message" rows={3} required />
                                  </Form.Group>
                                  <Button className='convert-btn' type="submit" size="lg" value= 'send'>Send Message</Button>
                              </Form>
                              
                          </div>
                  </Col>
               </Row>
             </Container>
          </div>
      <Footer />
    </div>
  )
}

export default Contactpage