import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirtData = useLoaderData();
    console.log(shirtData);
    return (
        <div>
            <h2>This is Home {shirtData.length}</h2>
        </div>
    );
};

export default Home;