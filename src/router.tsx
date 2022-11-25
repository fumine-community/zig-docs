import { Route, Router, Routes } from "solid-app-router";
import Header from "./components/Header";
import index from "./pages/index";

export default () => {
    return (<>
        <Header />
        <Routes>
            <Route path={"/"} component={index}/>
        </Routes>
    </>)
};
