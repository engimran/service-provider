import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Service;