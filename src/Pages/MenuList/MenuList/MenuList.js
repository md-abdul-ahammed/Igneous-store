import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuList.css'

const MenuList = ({ menu }) => {
    const { id, name, img, price, description } = menu;
    return (
        <Col className='px-2'>
            <Card className='h-100 p-3 border-0 hover-shadow text-center'>
                <Card.Img variant="top" src={img} className='img-fluid' />
                <Card.Body className='p-0'>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <Card.Text><p>{description}</p></Card.Text>
                </Card.Body>
                <Card.Title className='d-flex align-items-center justify-content-around'>

                    <Link to={`/menu-details/${id}`} className='primary-input text-decoration-none py-2 w-25 mb-3 primary-btn text-white'>Details</Link>
                    <h3> ${`${price}`} </h3>
                </Card.Title>
            </Card>
        </Col>
    );
};

export default MenuList;
