import styled from "styled-components";
import WeatherHeader from "./Components/WeatherHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FiveDayForecast from "./Components/FiveDayForecast";

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
        <Container>
            <img
                src="https://cdn-icons-png.flaticon.com/512/11146/11146740.png"
                alt="weather"
            />
            <p>Weather Information for {weatherInfo.city.name}</p>
            <WeatherHeader weatherInfo={weatherInfo} />
            <FiveDayForecast weatherList={weatherInfo.list} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > img {
        width: 68px;
        margin-top: 30px;
    }

    & > p {
        font-size: 50px;
        font-weight: 900;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    @media (max-width: 768px) {
        & > p {
            font-size: 25px;
        }
    }
`;

export default WeatherInfo;
