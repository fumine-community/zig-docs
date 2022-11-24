import "./header.css";
import { createSignal }from "solid-js"

export default () => {
    const [navbarToggled, setToggle] = createSignal(false);

    return (
        <nav>
            <a href="/" class="logo">Zig Language</a>
            <div class="nav--links">
                <a href="/docs" className="nav--link">Docs</a>
                <a href="/docs" className="nav--link">Playground</a>
                <a href="/docs" className="nav--link">Contributing</a>
                <a href="/docs" className="nav--link">Tooling</a>
                <a href="/docs" className="nav--link__primary">Get started</a>
                <div className="nav--mobile">
                    <img onClick={() => {setToggle(!navbarToggled)}} class="nav--toggle" src="/static/icons/menu.svg"></img>
                </div>
            </div>
        </nav>
    )
}
