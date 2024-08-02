import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #dfdfdf;
`;

export const DateHeader = styled.div`
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

export const DetailList = styled.div<{ isPopup: boolean }>`
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
