import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    margin-top: 27px;
    margin-bottom: 30px;
    width: 90%;

    .title {
        font-weight: 700;
        font-size: 36px;
        text-align: center;
        padding: 28px;
    }

    @media (max-width: 768px) {
        width: 100%;

        .title {
            font-size: 20px;
            text-align: center;
            padding: 18px;
        }
    }
`;
