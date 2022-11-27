import { createSignal, Show }from "solid-js";
import Warning from "./Warning";
import "./header.css";

export default () => {
    const [navbarToggled, setToggle] = createSignal(false);

    return (<>
        <nav>
            <a href="/" class="logo">Zig Language</a>
            <div class="nav--links">
                <a href="/docs" className="nav--link">Docs</a>
                <a href="/docs" className="nav--link">Playground</a>
                <a href="/docs" className="nav--link">Contributing</a>
                <a href="/docs" className="nav--link">Tooling</a>
                <a href="/docs" className="nav--link">Download</a>
                <a href="/docs" className="nav--link__primary">Get started</a>
            </div>
            <div className="nav--mobile">
                <img onClick={() => {setToggle(!navbarToggled())}} class="nav--toggle" src="/static/icons/menu.svg"></img>
                <Show when={navbarToggled()}>
                    <div className="nav--mobile-list">
                        <a href="/docs" className="nav--link">Docs</a>
                        <a href="/docs" className="nav--link">Playground</a>
                        <a href="/docs" className="nav--link">Contributing</a>
                        <a href="/docs" className="nav--link">Download</a>
                        <a href="/docs" className="nav--link__primary">Get started</a>
                    </div>
                </Show>                
            </div>
        </nav>
        <Warning title="In development" text="View of website is some kinda... Broken"/>
    </>)
}
