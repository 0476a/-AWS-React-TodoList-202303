import { css, Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import Todo from "./pages/Todo/Todo";
import User from "./pages/User/User";
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
                    <Route path="/user" Component={User}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
