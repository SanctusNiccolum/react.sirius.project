import React from 'react';
import {Outlet }from 'react-router-dom';
import Menu from '../../components/menu/Menu'
import Footer from '../../components/footer/Footer';

const MainLayout = () =>{
    return (
        <div>
            <Menu />
            <hr />
                <Outlet/>
            <hr />
            <Footer />
        </div>
    )
}

export default MainLayout;