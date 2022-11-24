import { MountableElement, render } from "solid-js/web";
import Header from "./components/Header";

render(
    () => {
        return <>
            <Header/>
            <h1>Hello, world!</h1>
        </>
    },
    document.getElementById("app") as MountableElement
)
