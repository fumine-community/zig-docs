import { MountableElement, render } from "solid-js/web";
import { Router} from "solid-app-router";
import AppRoutes from "./router";

render(
    () => {
        return <>
            <Router>
                <AppRoutes/>   
            </Router>
        </>
    },
    document.getElementById("app") as MountableElement
);
