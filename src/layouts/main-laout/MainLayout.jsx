import React from 'react';
import {Outlet }from 'react-router-dom';
import Menu from '../../components/menu/Menu'
import Footer from '../../components/footer/Footer';

const MainLayout = () =>{
    return (
        <div>
            <Menu />
            <hr />
            <main style={{ minHeight: "75dvh" }}>
                <Outlet/>
            </main>
            <hr />
            <Footer />
        </div>
    )
}

export default MainLayout;