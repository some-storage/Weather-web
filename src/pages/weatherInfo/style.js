import styled from "styled-components";

export const Container = styled.div`
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
