import React from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Layout } from "@consta/uikit/Layout";

const Cards = () => {

    const news = [
        {   id: 1,
            title:  "Новый закон о защите данных",
            description: "Защита личной информации ужесточается."
        },
        {
            id: 2,
            title: "Рекордный урожай в этом году",
            description: "Фермеры радуются отличным результатам."
        },
        {
            id: 3,
            title: "Успехи в борьбе с изменением климата",
            description: "Новые инициативы показывают результаты."
        }
    ]

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
                            {item.title}
                        </Text>
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