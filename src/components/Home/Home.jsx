import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import "./Home.css";
import toast from 'react-hot-toast';



const Home = () => {
    const shirtData = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = shirt => {
        
        const exists = cart.find(tshirt => tshirt._id === shirt._id);
        if (exists) {
            toast("Alredy added this shirt")
        }
        else {
            const newCart = [...cart, shirt];
            setCart(newCart)

        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining)
    }
    return (
        
        <div className='home-container'>
            {/* <Toaster></Toaster> */}
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
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;