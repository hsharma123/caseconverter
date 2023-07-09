import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import about from './../../assets/images/about.svg';
import { Link } from 'react-router-dom';

const Aboutpage = () => {
  return (
      <>
          <Header />
          <div className='about-page'>
            
            <Container>
                <Row className='align-items-center'>
                    <Col md={8}>
                          <h2 className='mb-4'>About Us</h2>
                          <p>Welcome to our CaseConverter Website, a powerful free online tool that allows you to easily convert text between different cases. Whether you need to convert your text to uppercase, lowercase, title case, sentence case, or even camel case, CaseConverter Website has got you covered.</p>
                          <p>Our mission is to make text formatting easy and accessible for everyone, regardless of their technical expertise. With our user-friendly interface, you can simply copy and paste your text into the converter and select the desired case. You can also choose to apply various options, such a removing extra spaces or capitalizing the first letter of each word, to further customize your text.</p>
                          <p> we are committed to providing our users with the best possible experience. If you have any questions, comments, or feedback, please don’t hesitate to <Link to ="/contact" className='text-primary'>contact us</Link>. We are always happy to hear from you and to help you in any way we can.</p>
                      </Col>
                      <Col>
                          <div className="about-image">
                              <img src={about} alt='about-image'/>
                          </div>
                      </Col>
                </Row>
            </Container>
          </div>
          <Footer />
      </>
  )
}

export default Aboutpage