import styled from "styled-components";

const ForecastCell = ({ date, currentWeatherData, isPopup, onCellClick }) => {
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
        <Container>
            <DateHeader onClick={() => onCellClick(date)}>
                <p>
                    {monthNames[currntDate.getMonth()]} {currntDate.getDate()}
                </p>
                <img
                    src={`/assets/${isPopup ? "icon-up.jpg" : "icon-down.jpg"}`}
                    alt="updown"
                />
            </DateHeader>
            <DetailList isPopup={isPopup}>
                {currentWeatherData.map(currentData => {
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
            </DetailList>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #dfdfdf;
`;

const DateHeader = styled.div`
    display: flex;
    align-items: center;

    & > p {
        font-weight: 700;
        font-size: 30px;
        margin: 28px 30px;
    }

    & > img {
        width: 24px;
        height: 24px;
        margin-left: auto;
        margin-right: 30px;
    }

    @media (max-width: 768px) {
        & > p {
            font-size: 20px;
            margin: 18px 25px;
        }

        & > img {
            width: 18px;
            height: 18px;
        }
    }
`;

const DetailList = styled.div`
    display: ${props => (props.isPopup ? "block" : "none")};

    .detailCell {
        display: flex;
        align-items: center;

        & > img {
            width: 60px;
            height: 60px;
            background-color: #dfdfdf;
            margin: 25px 20px 25px 50px;
            border-radius: 50%;
        }

        .detailInfo {
            display: flex;
            flex-direction: column;
            align-items: end;
            margin-left: auto;
            margin-right: 50px;

            & p:nth-child(1) {
                font-size: 20px;
                font-weight: 600;
                color: #8b8b8b;
            }

            & p:nth-child(2) {
                font-size: 30px;
                font-weight: 700;
            }
        }

        & > p {
            font-size: 30px;
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
        .detailCell {
            & > img {
                width: 40px;
                height: 40px;
                margin: 12px 12px 12px 28px;
            }

            .detailInfo {
                margin-right: 25px;

                & p:nth-child(1) {
                    font-size: 12px;
                }

                & p:nth-child(2) {
                    font-size: 16px;
                }
            }

            & > p {
                font-size: 20px;
            }
        }
    }
`;

export default ForecastCell;
