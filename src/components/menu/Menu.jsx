import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "@consta/uikit/Layout";
import {Button} from "@consta/uikit/Button"


const Menu = () => {
    return(
        <Layout>
            <NavLink to="/service">
                <Button label="Service"></Button> 
            </NavLink>
            <NavLink to="/">
                <Button label="Main page"></Button>
            </NavLink>
            <NavLink to="/auth">
                    <Button size='l' label="Log in" view="" form="round" />
                </NavLink>
        </Layout>
)

}

export default Menu;