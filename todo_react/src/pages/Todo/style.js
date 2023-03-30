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

export const TodoInputContainer = css`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 3px;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 50px;
    width: 60%;
    height: 40px;
`;

export const InputIcon = css`
    font-size: 20px;
    padding: 8px;
`;

export const TodoInput = css`
    border: none;
    outline: none;
    padding: 0px 70px;
    width: 100%;
    height: 100%;
    transition: padding 0.5s ease;
    &:focus {
        padding: 0px 10px;
        background-color: #fafafa;
    }
`;

export const AddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0px;

    font-size: 20px;
    border: none;
    padding: 5px 20px;
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

export const TodoListContainer = css`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 510px;
    height: 660px;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 5px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 5px;
    }
`;

export const TodoContents = css`
    margin: 10px;
    width: 230px;
    height: 230px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0px 0px 10px 1px #121212;
    }
`;

export const ContentHeader = css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    padding-bottom: 5px;
    height: 30px;
`;

export const TodoDate = css`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 20px;
    line-height: 15px;
`;

export const TodoTime = css`
    display: flex;
    align-items: flex-end;
    font-size: 11px;
`;

export const ContentMain = css`
    padding: 10px;
    word-break: keep-all;
    line-height: 25px;
    height: 130px;
    word-wrap: break-word;
    overflow: auto;
    &::-webkit-scrollbar {
    width: 5px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 5px;
    }
`;

export const ContentFooter = css`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-top: 0;
    height: 25px;
`;

export const ActiveButton = css`
    font-weight: 600;
    cursor: pointer;

    border: none;
    padding: 5px;

    background-color: white;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #f0f0f0;
    }
`;

export const modalContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000aa;
`;

export const modelBox = css`
    border-radius: 7px;
    width: 350px;
    height: 200px;
    background-color: #fafafa;
    overflow: hidden;
`;

export const modalHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    height: 40px;
`;

export const modalTitle = css`
    font-size: 18px;
    font-weight: 600;
`;

export const modalMain = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    height: 120px;
`

export const modifyModalInput = css`
    outline: none;
    border: none;
    border-bottom: 2px solid green;
    width: 90%;
    height: 30px;
    background-color: #fafafa;
`;

export const removeMessage = css`
    outline: none;
    border: none;
    width: 90%;
    height: 30px;
    background-color: #fafafa;
`;

export const modalFooter = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

export const modalButton = css`
    border: none;
    background-color: #ffffff00;
    width: 50%;
    height: 100%;
    cursor: pointer;

    &:not(:last-of-type){
        border-right: 1px solid #dbdbdb;
    }
    &:hover{
        background-color: #eee;
    }
    &:active{
        background-color: #dbdbdb;
    }
`;