import React from 'react';
import "./TShirt.css"

const TShirt = ({shirt, handleAddToCart}) => {
    const {picture, name, price} = shirt;

    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <button onClick={() => handleAddToCart(shirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;