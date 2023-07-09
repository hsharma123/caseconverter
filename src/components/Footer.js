import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
          <Container>
              <Row className='align-items-center'>
                  <Col md= {6}>
                      <div className='copyright'>
                          <p className='mb-md-0'>Develope By <Link to= 'https://himanshusharma-portfolio.netlify.app' className='text-secondary'>Himanshu Sharma</Link></p>
                      </div>
                  </Col>
                  <Col md= {6}>
                      <div className='copyright'>
                          <p className='text-md-end mb-0 mb-md-0'>Copyright @2023</p>
                      </div>
                  </Col>
              </Row>
        </Container>
    </div>
  )
}

export default Footer