import { css } from "@emotion/react";

export const MainContainer = css`
    margin: 10px auto;
    width: 550px;
    height: 100%;
`;

export const MainHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 64px;
`;

export const MainTitle = css`
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 20px 0px 0px 20px;
    font-size: 36px;
    font-weight: 600;
`;

export const InfoPhoto = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`;

export const InfoMain = css`
    margin-top: 30px;
    padding: 20px;
`;

export const InfoTitle = css`
    margin: 0px;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: default;
`;

export const Button = css`
    font-size: 15px;
    border: none;
    padding: 5px 5px;
    height: 100%;

    font-weight: 600;
    cursor: pointer;

    background-color: #12121200;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #f0f0f0;
    }
`;

export const InfoContentContainer = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const InfoContentLeft = css`
    width: 48%;
`;

export const InfoContentRight = css`
    width: 48%;
`;

export const InfoContent = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const InfoInput = css`
    border: none;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 10px;
    padding: 5px;
    width: 95%;
    height: 17px;
    background-color: #f0f0f0;
    &:disabled {
        background-color: white;
    }
`;


export const ItroduceInput = css`
    border: none;
    border-bottom: 1px solid #dbbdbd;
    width: 100%;
    height: 100px;
    resize: none;
    background-color: #f0f0f0;
    &:disabled{
        background-color: white;
    }
`;
