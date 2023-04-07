import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {
    const shirtData = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt =>{
        console.log(tshirt);
    }
    return (
        <div className='home-container'>
            <div className='tshirts-container'>
                {
                    shirtData.map(shirt => <TShirt
                        key={shirt._id}
                        shirt={shirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;