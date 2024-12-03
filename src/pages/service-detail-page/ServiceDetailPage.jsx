import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import {Button} from '@consta/uikit/Button'
import { fetchServiceDetails } from '../../store/api-actions'
import {Loader} from '@consta/uikit/Loader'
import './ServiceDetailPage.css'

const ServiceDetailPage = () => {

    const { id } = useParams();
    const [serviceId, setServiceId] = useState(Number(id));
    const [service, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isNeedUpdate = true;
        setIsLoading(true);
        fetchServiceDetails(serviceId)()
            .then((service) => {
                if (isNeedUpdate) {
                    setService(service);
                    setIsLoading(false);
                }
            })
            .catch(() => {
                setService(null);
                setIsLoading(false);
            });

        return () => (isNeedUpdate = false);
    }, [serviceId]);

    const handlePrev = () => {
        if (serviceId > 1) setServiceId(serviceId - 1);
    };

    const handleNext = () => {
        setServiceId(serviceId + 1);
    };

    return (
        <div className="service-details-page">
            <h1 className='title'>Описание услуги</h1>
            {isLoading ? (
                <Loader size="m" />
            ) : service ? (
                <div className="service-content">
                    <h3 className="service-title">Название: {service.name}</h3>
                    <h3 className="service-description">Описание: {service.description}</h3>
                </div>
            ) : (
                <div className="error-message">Сервис не найден</div>
            )}
            <div className="service-indicator">
                <Button onClick={handlePrev} className="btn" disabled={serviceId <= 1} label="Prev">
                </Button>
                <Button onClick={handleNext} className="btn" label="Next">
                </Button>
            </div>
        </div>
    );
}

export default ServiceDetailPage;