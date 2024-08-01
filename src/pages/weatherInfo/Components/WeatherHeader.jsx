import styled from "styled-components";

const WeatherHeader = ({ weatherInfo }) => {
    const todayWeatherInfo = weatherInfo.list[0];

    return (
        <Container>
            <img
                src={`https://openweathermap.org/img/wn/${todayWeatherInfo.weather[0].icon}@4x.png`}
                alt="weather"
            />
            <div className="locInfo">
                <p>{todayWeatherInfo.dt_txt}</p>
                <p>
                    {weatherInfo.city.name}, {weatherInfo.city.country}
                </p>
            </div>
            <div className="temInfo">
                <p className="temText">{todayWeatherInfo.main.temp}°C</p>
                <p className="infoText">
                    Feels like {todayWeatherInfo.main.feels_like}°C {todayWeatherInfo.weather[0].main} 풍속{" "}
                    {todayWeatherInfo.wind.speed} 습도
                    {todayWeatherInfo.main.humidity}
                </p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: white;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    width: 90%;

    & > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 30px 0px 30px 30px;
        background-color: #dfdfdf;
    }

    .temInfo {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-left: auto;
        margin-right: 30px;

        .temText {
            font-weight: 700;
            font-size: 50px;
        }

        .infoText {
            font-weight: 600;
            font-size: 14px;
            color: #8b8b8b;
        }
    }

    .locInfo p:nth-child(1) {
        font-weight: 700;
        font-size: 20px;
        color: #555555;
    }

    .locInfo p:nth-child(2) {
        font-weight: 700;
        font-size: 36px;
        color: #3d3d3d;
    }

    @media (max-width: 768px) {
        width: 100%;
        gap: 15px;

        & > img {
            width: 50px;
            height: 50px;
            margin: 20px 0px 20px 20px;
        }

        .temInfo {
            .temText {
                font-size: 25px;
            }
            .infoText {
                font-size: 8px;
            }
        }

        .locInfo p:nth-child(1) {
            font-size: 12px;
        }

        .locInfo p:nth-child(2) {
            font-size: 18px;
        }
    }
`;

export default WeatherHeader;
