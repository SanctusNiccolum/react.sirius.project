import React from "react";
import { Layout } from "@consta/uikit/Layout";
import { NavLink } from "react-router-dom";
import { Button } from "@consta/uikit/Button";


const Footer = () =>{
    return(
        <Layout>
            <NavLink to="/service">
                <Button label="Service"></Button> 
            </NavLink>
            <NavLink to="/">
                <Button label="Main page"></Button>
            </NavLink>
        </Layout>
    )
};

export default Footer;