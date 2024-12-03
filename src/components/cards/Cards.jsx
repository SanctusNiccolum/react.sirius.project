import React, { useState, useEffect } from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Layout } from "@consta/uikit/Layout";
import {getNews} from "../../store/api-actions";
import "./Cards.css";

const Cards = () => {

    // const news = [
    //     {   id: 1,
    //         title:  "Новый закон о защите данных",
    //         description: "Защита личной информации ужесточается."
    //     },
    //     {
    //         id: 2,
    //         title: "Рекордный урожай в этом году",
    //         description: "Фермеры радуются отличным результатам."
    //     },
    //     {
    //         id: 3,
    //         title: "Успехи в борьбе с изменением климата",
    //         description: "Новые инициативы показывают результаты."
    //     }
    // ]


    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getNews()()
            .then((data) => {
                setNews(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);


    return (
        <Layout className="news-list" direction="column">
            {news.map((item) => (
                <Card
                    key={item.id}
                    verticalSpace="xl"
                    horizontalSpace="xl"
                    shadow
                    className="news-item"
                >
                    <div className="news-content">
                        <Text size="xl" weight="bold" className="news-title">
                            {item.name}
                        </Text>
                        <hr />
                        <Text size="m" view="secondary" className="news-description">
                            {item.description}
                        </Text>

                    </div>
                </Card>
            ))}
        </Layout>
    );
}

export default Cards;