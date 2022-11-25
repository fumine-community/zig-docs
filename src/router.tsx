import { Route, Router, Routes } from "solid-app-router";
import Header from "./components/Header";
import index from "./pages/index";
import error from "./pages/error";

export default () => {
    return (<>
        <Header />
        <Routes>
            <Route path={"/"} component={index}/>
            <Route path={"/*"} component={error} />
        </Routes>
    </>)
};
