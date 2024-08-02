import WeatherHeader from "./Components/weatherHeader/WeatherHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FiveDayForecast from "./Components/fiveDayForecast/FiveDayForecast";
import * as S from "./style";
import { IWeatherInfoResponse } from "../../types/types";

const WeatherInfo = () => {
    const [weatherInfo, setWeatherInfo] = useState<IWeatherInfoResponse | null>();
    const [isLoding, setIsLoding] = useState<boolean>(true);
    const { location } = useParams<string>();

    const fetchWeather = async () => {
        try {
            setIsLoding(true);
            const res = await axios.get<IWeatherInfoResponse>(
                `https://api.openweathermap.org/data/2.5/forecast?APPID=79b53f4521fa00fd52c2cb9a4a680d92&q=${location}`
            );
            setIsLoding(false);

            setWeatherInfo(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    if (isLoding) return <div>로딩중..</div>;
    if (!weatherInfo) return <div>값을 불러오지 못했습니다.</div>;

    return (
        <S.Container>
            <img
                src="https://cdn-icons-png.flaticon.com/512/11146/11146740.png"
                alt="weather"
            />
            <p>Weather Information for {weatherInfo.city.name}</p>
            <WeatherHeader info={weatherInfo} />
            <FiveDayForecast weatherList={weatherInfo.list} />
        </S.Container>
    );
};

export default WeatherInfo;
