import React, { useState, useEffect } from 'react';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { NavLink } from 'react-router-dom';
import {AppRoute} from '../../const'
// import { AppRoute } from '../../const';
import { Loader } from '@consta/uikit/Loader';


const CardsService = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const news = [
        {   id: 1,
            title:  "Услуга1",
            description: "Что-то делает"
        },
        {
            id: 2,
            title: "Услуга2",
            description: "..."
        },
        {
            id: 3,
            title: "Услуга3",
            description: "..."
        }
    ]

    return (
        <div className="card-list">
          {
        //   isLoading ? (
        //     <Loader size="m" />
        //   ) :
           (
            news.map((item) => (
              <NavLink
                to={`${AppRoute.service}/${item.id}`}
                key={item.id}
                className="card-link"              >
                <Card
                  verticalSpace="l"
                  horizontalSpace="l"
                  shadow
                  className="card-item"
                >

                  <div className="card-content">
                    <p size="l" weight="bold" className="card-title">
                      {item.title}
                    </p>
                    <Text size="s" view="secondary" className="card-description">
                      {item.description}
                    </Text>
                  </div>
                </Card>
               </NavLink>
            ))
          )}
        </div>
      );
}

export default CardsService;