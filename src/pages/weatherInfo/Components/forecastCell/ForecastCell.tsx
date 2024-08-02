import React from "react";
import { IList } from "../../../../types/types";
import * as S from "./style";

type ForecastCellProps = {
    date: string;
    currentWeatherData: IList[];
    isPopup: boolean;
    onCellClick: (targetDate: string) => void;
};

const ForecastCell = ({ date, currentWeatherData, isPopup, onCellClick }: ForecastCellProps) => {
    const currntDate = new Date(date);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <S.Container>
            <S.DateHeader onClick={() => onCellClick(date)}>
                <p>
                    {monthNames[currntDate.getMonth()]} {currntDate.getDate()}
                </p>
                <img
                    src={`/assets/${isPopup ? "icon-up.jpg" : "icon-down.jpg"}`}
                    alt="updown"
                />
            </S.DateHeader>
            <S.DetailList isPopup={isPopup}>
                {currentWeatherData.map((currentData: IList) => {
                    const cellDate = new Date(currentData.dt_txt);
                    const formatTime =
                        `${cellDate.getHours() < 10 ? "0" + cellDate.getHours() : cellDate.getHours()}` +
                        ":" +
                        `${cellDate.getMinutes() < 10 ? "0" + cellDate.getMinutes() : cellDate.getMinutes()}` +
                        `${cellDate.getHours() >= 12 ? "pm" : "am"}`;

                    return (
                        <div
                            key={currentData.dt_txt}
                            className="detailCell"
                        >
                            <img
                                src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@4x.png`}
                                alt="weather"
                            />
                            <p>{formatTime}</p>
                            <div className="detailInfo">
                                <p>{currentData.weather[0].description}</p>
                                <p>
                                    {currentData.main.temp_min}℃ / {currentData.main.temp_max}℃
                                </p>
                            </div>
                        </div>
                    );
                })}
            </S.DetailList>
        </S.Container>
    );
};

export default ForecastCell;
