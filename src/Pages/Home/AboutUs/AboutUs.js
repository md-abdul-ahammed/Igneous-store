import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaArrowCircleRight, FaBiking, FaBell, FaCarSide } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <h1 className='text-center fw-bold'>Why You Choose Us</h1>
                <p className='text-center'>Barton Waited twenty always repair in within we do. </p>
                <p className='text-center'>An delighted offending curiousity my is dashwoods at. Boy prosperous increasing surrounded</p>
            </div>
            <Row xs={1} md={3} className="g-4 container mx-auto">
                <Col>
                    <Card>
                        <Card.Img variant="top" src='https://i.ibb.co/jGrCjtK/adult-blur-blurred-background-687824.png' />
                        <Card.Body>
                            <Card.Title className='mb-3'><span className='fs-2 fw-bold me-1 default-text-color'><FaBiking /></span> Fast Delivery</Card.Title>
                            <Card.Text className='text-muted'>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-primary'>
                                <Link className='text-decoration-none fw-bold' to='/home'>See More <span className='ms-2 fw-bold text-success icon-size'><FaArrowCircleRight /></span></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/DC0gx4Y/chef-cook-food-33614.png" />
                        <Card.Body>
                            <Card.Title className='mb-3'><span className='fs-2 fw-bold me-1 default-text-color'><FaBell /></span> A Good Auto Responder</Card.Title>
                            <Card.Text className='text-muted'>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-primary'>
                                <Link className='text-decoration-none fw-bold' to='/home'>See More <span className='ms-2 fw-bold text-success icon-size'><FaArrowCircleRight /></span></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/6bp3m3y/architecture-building-city-2047397.png" />
                        <Card.Body>
                            <Card.Title className='mb-3'><span className='fs-2 fw-bold me-1 default-text-color'><FaCarSide /></span> Home Delivery</Card.Title>
                            <Card.Text className='text-muted'>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className='text-primary'>
                                <Link className='text-decoration-none fw-bold' to='/home'>See More <span className='ms-2 fw-bold text-success icon-size'><FaArrowCircleRight /></span></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;