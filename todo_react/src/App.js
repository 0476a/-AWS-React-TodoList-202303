import { css, Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import { Container } from "./pages/Todo/style";
import Todo from "./pages/Todo/Todo";
import { reset } from "./styles/Global/reset";
/** @jsxImportSource @emotion/react */



function App() {

    const Container = css`
        position: relative;
        margin: 50px auto;
        border: 2px solid #dbdbdb;
        width: 600px;
        height: 800px;
        background-color: white;

        box-sizing: border-box;
        color: #121212;
        font-size: 14px;
        
        overflow: hidden;
    `;

    return (
        <>
            <div css={Container}>
                <Global styles={reset}/>
                <MainAside />
                <Routes>
                    <Route path="/todo" Component={Todo}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
