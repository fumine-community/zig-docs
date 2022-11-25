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
    </>)
};
