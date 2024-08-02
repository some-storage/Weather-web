export interface IWeatherInfoResponse {
    cod: string;
    message: number;
    cnt: number;
    list: IList[];
    city: ICity;
}

export interface ICity {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface ICoord {
    lat: number;
    lon: number;
}

export interface IList {
    dt: number;
    main: IMainClass;
    weather: IWeather[];
    clouds: IClouds;
    wind: IWind;
    visibility: number;
    pop: number;
    sys: ISys;
    dt_txt: string;
    rain?: IRain;
}

export interface IClouds {
    all: number;
}

export interface IMainClass {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface IRain {
    "3h": number;
}

export interface ISys {
    pod: IPod;
}

export enum IPod {
    D = "d",
    N = "n",
}

export interface IWeather {
    id: number;
    main: EMainEnum;
    description: EDescription;
    icon: string;
}

export enum EDescription {
    BrokenClouds = "broken clouds",
    ClearSky = "clear sky",
    FewClouds = "few clouds",
    LightRain = "light rain",
    OvercastClouds = "overcast clouds",
    ScatteredClouds = "scattered clouds",
}

export enum EMainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain",
}

export interface IWind {
    speed: number;
    deg: number;
    gust: number;
}
