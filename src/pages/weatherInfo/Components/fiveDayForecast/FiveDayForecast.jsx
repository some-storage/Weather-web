import ForecastCell from "../forecastCell/ForecastCell";
import { useState } from "react";
import * as S from "./style";

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
        <S.Container>
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
        </S.Container>
    );
};

export default FiveDayForecast;
