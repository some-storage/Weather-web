import styled from "styled-components";
import ForecastCell from "./ForecastCell";
import { useState } from "react";

const FiveDayForecast = ({ weatherList }) => {
    const fiveDate = Array.from({ length: 5 }, (_, i) => i).map(i => {
        const today = new Date();
        today.setDate(today.getDate() + i);
        return today.toISOString().substring(0, 10);
    });

    const [cellPopupStatus, setCellPopupStatus] = useState(fiveDate.map(date => ({ date: date, isPopup: false })));

    const cellClickHandler = targetDate => {
        setCellPopupStatus(pre =>
            pre.map(value => (value.date === targetDate ? { date: value.date, isPopup: !value.isPopup } : value))
        );
    };

    return (
        <Container>
            <div className="title">5-day Forecast</div>
            {fiveDate.map((date, index) => (
                <ForecastCell
                    key={cellPopupStatus[index].dete}
                    date={date}
                    isPopup={cellPopupStatus[index].isPopup}
                    currentWeatherData={weatherList.filter(data => data.dt_txt.substring(0, 10) === date)}
                    onCellClick={cellClickHandler}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    margin-top: 27px;
    margin-bottom: 30px;
    width: 90%;

    .title {
        font-weight: 700;
        font-size: 36px;
        text-align: center;
        padding: 28px;
    }

    @media (max-width: 768px) {
        width: 100%;

        .title {
            font-size: 20px;
            text-align: center;
            padding: 18px;
        }
    }
`;

export default FiveDayForecast;
