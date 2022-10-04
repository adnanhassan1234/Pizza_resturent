import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CardItem = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="full">
                    <Card className='my-2'>
                        <Card.Img variant="top" src={props.image} />
                        <Card.Body>
                            <Card.Title className='mb-3'>{props.title}</Card.Title>
                            <p>{props.des.slice(0, 105)}...</p>
                            <Card.Text>
                                <span> <strong>Price</strong>  </span> <span style={{ float: 'right', fontWeight: 'bold', color: 'red' }}>{props.price}</span>
                            </Card.Text>
                            <NavLink to="/contact" style={{ textDecoration: "none" }}><Button variant="contained" className='' color="secondary"> ORDER NOW</Button> </NavLink>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default CardItem;