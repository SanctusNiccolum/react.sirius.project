import React from 'react'
import { Layout } from '@consta/uikit/Layout';
import CardsService from '../../components/cards_services/CardsService';

const ServicePage = () => {
    return(
        <Layout className='elements' direction='column'>
            <Layout className='title'>
            <h1 style={{textPropAlign: "center", color: "blueviolet"}}>Услуги</h1>
            </Layout>
            <hr></hr>
            <Layout className='cards'>
            <CardsService></CardsService>
            </Layout>
        </Layout>
    )
}

export default ServicePage;