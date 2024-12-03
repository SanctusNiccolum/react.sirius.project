import React, { useState, useEffect } from 'react';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { NavLink } from 'react-router-dom';
import {AppRoute} from '../../const'
// import { AppRoute } from '../../const';
import { Loader } from '@consta/uikit/Loader';
import { fetchServices } from '../../store/api-actions';
import { Layout } from '@consta/uikit/Layout';
import './CardsService.css'


const CardsService = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchServices()()
          .then((data) => {
            setServices(data);
              setIsLoading(false);
          })
          .catch(() => {
              setIsLoading(false);
          });
  }, []);

    return (
        <Layout className="card-list">
          {
          isLoading ? (
            <Loader size="m" />
          ) :
           (
            services.map((item) => (
              <NavLink
                to={`${AppRoute.service}/${item.id}`}
                key={item.id}
                className="card-link">
                <Card
                  verticalSpace="l"
                  horizontalSpace="l"
                  shadow
                  className="card-item"
                >

                  <div className="card-content">
                    <p size="l" weight="bold" className="card-title">
                      {item.name}
                    </p>
                    <Text size="s" view="secondary" className="card-description">
                      {item.description}
                    </Text>
                  </div>
                </Card>
               </NavLink>
            ))
          )}
        </Layout>
      );
}

export default CardsService;