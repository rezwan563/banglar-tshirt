import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {
    const shirtData = useLoaderData();
    console.log(shirtData);
    return (
        <div className='home-container'>
            <div className='tshirts-container'>
                {
                    shirtData.map(shirt => <TShirt
                        key={shirt._id}
                        shirt={shirt}
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