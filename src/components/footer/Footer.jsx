import React from 'react';
import './Footer.css';

import { AppRoute } from "../../const";

import { NavLink } from "react-router-dom";

import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

const getStyleForNavLink = ({ isActive }) =>
    isActive
        ? {
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
        }
        : {}
    ;


const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <Layout className="footer">
            <Layout className="footer__nav">
                <Layout className="footer__nav-buttons">
                    <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                        <Button size="l" label="Главная" view="clear" />
                    </NavLink>
                    <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                        <Button size="l" label="Услуги" view="clear" />
                    </NavLink>
                </Layout>
            </Layout>
            <Text size='xl' lineHeight="m" view="primary" className="footer__title">
                © {currentYear} Вероника Машталер
            </Text>
        </Layout>
    );
};

export default Footer;