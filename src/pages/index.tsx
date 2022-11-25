import Flickity from "flickity";
import { onMount } from "solid-js";
import "./index.css";

const helloWorldExample = "const std = @import(\"std\");\n\n" +
                          "fn main() void {\n" + 
                            "\tstd.debug.print(\"Hello, world! " + '\u005C' + "\\n\", .{});\n" + // Strange code...
                          "}";

const overflowExample = "test \"integer overflow at runtime\" {\n" +
                           "\tvar x: u8 = 255;\n" + 
                            "\tx += 1;\n" +
                        "}";

export default () => {
    return (<>
        <main>
            <div className="container">
                <div className="main--text">
                    <h1>
                        Welcome to Zig Docs!
                        <span className="dec--in-dev">In development</span>
                    </h1>
                    <p>
                        Unofficial documentation by Fumine Comunity
                    </p>
                </div>
                <pre>
                    <code>
                        {helloWorldExample}
                    </code>
                </pre>
            </div>
            <div className="background--gradient" />
        </main>
        <section>
            <div className="container">
                <h2>What is Zig?</h2>
                <p>
                    Zig is a general-purpose programming language and toolchain for maintaining robust, optimal and reusable software.
                    Its primary goal is to provide fast and safe builds, without need in Garbage Collectors and borrow checkers.
                </p>
                <pre class="dec--center">
                    <code>
                        {overflowExample}
                    </code>
                </pre>
            </div>
        </section>
        <section class="black">
            <div className="container">
                <h2>What benefits?</h2>
                <div className="cards--section">
                    <div className="card--wrap">
                        <h3>A Simple Language</h3>
                        <p>
                            Focus on debugging your application rather than debugging your programming language knowledge.
                        </p>
                        <ul>
                            <li>No hidden control flow.</li>
                            <li>No hidden memory allocations.</li>
                            <li>No preprocessor, no macros.</li>
                        </ul>
                        <img src="/static/pictogramm/compliant.svg" alt="Pictogram not loadedd" className="pictogram" />
                    </div>
                    <div className="card--wrap">
                        <h3>Comptime</h3>
                        <p>
                        A fresh approach to metaprogramming based on compile-time code execution and lazy evaluation.
                        </p>
                        <ul>
                            <li>Call any function at compile-time.</li>
                            <li>Manipulate types as values without runtime overhead.</li>
                            <li>Comptime emulates the target architecture.</li>
                        </ul>
                        <img src="/static/pictogramm/control-panel.svg" alt="Pictogram not loadedd" className="pictogram" />
                    </div>
                    <div className="card--wrap">
                        <h3>Maintain it with Zig</h3>
                        <p>
                            Incrementally improve your C/C++/Zig codebase.
                        </p>
                        <ul>
                            <li>Use Zig as a zero-dependency, drop-in C/C++ compiler that supports cross-compilation out-of-the-box.</li>
                            <li>Leverage zig build to create a consistent development environment across all platforms.</li>
                            <li>Add a Zig compilation unit to C/C++ projects; cross-language LTO is enabled by default.</li>
                        </ul>
                        <img src="/static/pictogramm/customizable.svg" alt="Pictogram not loadedd" className="pictogram" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2>Community</h2>
                <p>Zig has small, but very friendly community.</p>
                <div class="courousel"   data-flickity='{ "wrapAround": true }'>
                    <div class="carousel-cell">
                        <div className="carousel-content">
                            <h2>Discord</h2>
                            <p>
                                Zig community has official discord channel,
                                where You can ask about any party of the language.
                                Disussions, tips and requests of new features are always welcome.
                            </p>
                            <div className="carousel-img">
                                <img src="/static/discord.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div className="carousel-content">
                            <h2>This website</h2>
                            <p>
                                This website is build by peoples that also uses zig and scanning for good tools build for zig or on zig.
                                We also take a look at any changes made in them and update this information once there is something new appears.
                            </p>
                            <div className="carousel-img">
                                <img src="/static/webpage.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div className="carousel-content">
                            <h2>Zig Showtime</h2>
                            <p>
                                Zig Language community has show called "Zig showtime".
                                This show is telling about use cases of languages, it's events and letest news.
                                It also has it's own discord, that You would propably join.
                            </p>
                            <div className="carousel-img">
                                <img src="/static/zig-showtime.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div className="carousel-content">
                            <h2>Zig official news feed</h2>
                            <p>
                                Zig has also offial news feeds.
                                You could checkout Anrews tweeter and ziglang news section.
                            </p>
                            <div className="carousel-img">
                                <img src="/static/news.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
};
