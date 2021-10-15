import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './MenuList.css'

const MenuList = ({ menu }) => {
    const { name, img, price, description } = menu;
    return (
        <Col className='px-2'>
            <Card className='h-100 p-3 border-0 hover-shadow text-center'>
                <Card.Img variant="top" src={img} className='img-fluid' />
                <Card.Body className='p-0'>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <Card.Text><p>{description}</p></Card.Text>
                </Card.Body>
                <Card.Title>
                    <h3>${price}</h3>
                </Card.Title>
            </Card>
        </Col>
    );
};

export default MenuList;
