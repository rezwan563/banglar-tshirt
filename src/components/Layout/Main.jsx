import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;