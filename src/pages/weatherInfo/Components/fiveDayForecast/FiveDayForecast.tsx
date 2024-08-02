import ForecastCell from "../forecastCell/ForecastCell";
import { useState } from "react";
import * as S from "./style";
import { IList } from "../../../../types/types";
import { CellPopupStatus } from "./Types";

type ListProps = {
    weatherList: IList[];
};

const FiveDayForecast = ({ weatherList }: ListProps) => {
    const fiveDate = Array.from({ length: 5 }, (_, i) => i).map(i => {
        const today = new Date();
        today.setDate(today.getDate() + i);
        return today.toISOString().substring(0, 10);
    });

    const [cellPopupStatus, setCellPopupStatus] = useState<CellPopupStatus[]>(
        fiveDate.map(date => ({ date: date, isPopup: false }))
    );

    const cellClickHandler = (targetDate: string) => {
        setCellPopupStatus(pre =>
            pre.map(value => (value.date === targetDate ? { date: value.date, isPopup: !value.isPopup } : value))
        );
    };

    return (
        <S.Container>
            <div className="title">5-day Forecast</div>
            {fiveDate.map((date, index) => (
                <ForecastCell
                    key={cellPopupStatus[index].date}
                    date={date}
                    isPopup={cellPopupStatus[index].isPopup}
                    currentWeatherData={weatherList.filter((data: IList) => data.dt_txt.substring(0, 10) === date)}
                    onCellClick={cellClickHandler}
                />
            ))}
        </S.Container>
    );
};

export default FiveDayForecast;
