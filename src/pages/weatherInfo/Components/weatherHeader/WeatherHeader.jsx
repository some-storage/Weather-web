import * as S from "./style";

const WeatherHeader = ({ weatherInfo }) => {
    const todayWeatherInfo = weatherInfo.list[0];

    return (
        <S.Container>
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
        </S.Container>
    );
};

export default WeatherHeader;
