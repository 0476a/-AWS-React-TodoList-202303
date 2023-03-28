import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import Todo from "./pages/Todo/Todo";
import { reset } from "./styles/Global/reset";
/** @jsxImportSource @emotion/react */
function App() {
  return (
    <>
        <Global styles={reset}/>
        <MainAside />
        <Routes>
            <Route path="/todo" Component={Todo}/>
        </Routes>
    </>
  );
}

export default App;
