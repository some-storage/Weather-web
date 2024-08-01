import { Link } from "react-router-dom";
import styled from "styled-components";

const WeatherSelect = () => {
    return (
        <Container>
            <TitleWrapper>
                <p className="title">Welcone to</p>
                <p className="subTitle">Weather App!</p>
                <p className="caption">Choose a city from the list below to check the weather.</p>
            </TitleWrapper>
            <SelectionWrapper>
                <Link to="/detail/Seoul,KOR">Seoul</Link>
                <Link to="/detail/Tokyo,JP">Tokyo</Link>
                <Link to="/detail/Paris,FR">Paris</Link>
                <Link to="/detail/London,GB">London</Link>
            </SelectionWrapper>
            <img
                src="https://cdn-icons-png.flaticon.com/512/11146/11146740.png"
                alt="weather"
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px;

    & > img {
        width: 430px;
        margin-top: 66px;
    }

    @media (max-width: 768px) {
        margin: 40px 10px;

        & > img {
            width: 150px;
            margin-top: 66px;
        }
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-size: 82px;
        font-weight: 900;
        color: #3d3d3d;
    }

    .subTitle {
        font-size: 82px;
        font-weight: 900;
        color: rgb(255, 66, 100);
    }

    .caption {
        font-size: 16px;
        font-weight: 400;
        color: #8b8b8b;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        .title {
            font-size: 42px;
        }

        .subTitle {
            font-size: 42px;
        }

        .caption {
            font-size: 10px;
        }
    }
`;

const SelectionWrapper = styled.div`
    flex: 0 1 auto;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;

    & > * {
        color: #ff0045;
        background-color: white;
        border: 1px solid #b70055;
        border-radius: 6px;
        padding: 8px 50px;
        text-decoration: none;
        text-align: center;
        font-size: 16px;
    }

    & > *:hover {
        background-color: #ffd2cc;
    }

    & > *:focus {
        background-color: #ffaba1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;

        & > * {
            padding: 8px 40px;
        }
    }
`;

export default WeatherSelect;
