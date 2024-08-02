import { Link } from "react-router-dom";
import * as S from "./style";

const WeatherSelect = () => {
    return (
        <S.Container>
            <S.TitleWrapper>
                <p className="title">Welcone to</p>
                <p className="subTitle">Weather App!</p>
                <p className="caption">Choose a city from the list below to check the weather.</p>
            </S.TitleWrapper>
            <S.SelectionWrapper>
                <Link to="/detail/Seoul,KOR">Seoul</Link>
                <Link to="/detail/Tokyo,JP">Tokyo</Link>
                <Link to="/detail/Paris,FR">Paris</Link>
                <Link to="/detail/London,GB">London</Link>
            </S.SelectionWrapper>
            <img
                src="https://cdn-icons-png.flaticon.com/512/11146/11146740.png"
                alt="weather"
            />
        </S.Container>
    );
};

export default WeatherSelect;
