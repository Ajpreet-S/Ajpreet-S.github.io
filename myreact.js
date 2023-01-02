function Header() {
    return (
        <header>
            <h1>I'm learning React.js Right Now</h1>
        </header>
    );
}

function Main() {
    return (
        <section>
            <p>
                iuvaret sociis suas has invenire dicant electram facilisis ultricies cursus sociosqu enim minim
                consectetuer debet conubia eripuit definiebas indoctum constituto
            </p>
        </section>
    );
}

function CustomJumbotron() {
    return (
        <div className="container-fluid">
            <h1 className="display-5 fw-bold">I'm learning React.js</h1>
            <p className="col-md-8 fs-4">discere errem ocurreret nam nibh feugiat natoque vidisse inceptos partiendo atomorum consequat partiendo hinc deserunt error sit deterruisset adipiscing aptent</p>
        </div>
    );
}


ReactDOM.render(
    CustomJumbotron(),
    document.querySelector("#root")
);