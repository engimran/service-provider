import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p>{name}</p>
            <button>Booking Now</button>
        </div>
    );
};

export default Service;