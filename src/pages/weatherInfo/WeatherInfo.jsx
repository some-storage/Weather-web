import WeatherHeader from "./Components/weatherHeader/WeatherHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FiveDayForecast from "./Components/fiveDayForecast/FiveDayForecast";
import * as S from "./style";

const WeatherInfo = () => {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [isLoding, setIsLoding] = useState(true);
    const { location } = useParams();

    const fetchWeather = async () => {
        try {
            setIsLoding(true);
            const res = await axios.get(
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

    return (
        <S.Container>
            <img
                src="https://cdn-icons-png.flaticon.com/512/11146/11146740.png"
                alt="weather"
            />
            <p>Weather Information for {weatherInfo.city.name}</p>
            <WeatherHeader weatherInfo={weatherInfo} />
            <FiveDayForecast weatherList={weatherInfo.list} />
        </S.Container>
    );
};

export default WeatherInfo;
