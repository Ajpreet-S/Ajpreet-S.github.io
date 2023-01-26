function JumboTron() {
    return (
        <div id={"Jumbotron"}
             className={"p-5 mb-5 mx-md-5 bg-gradient border border-success border-opacity-10 rounded-3 shadow-sm vh"}>
            <div className={"py-5"}>
                <h1 className={"display-4 fw-bold"}>I'm learning <span className={"text-info"}>React</span> and <span
                    className={"text-success"}>Node.js</span></h1>
                <p className={"col-md-8 fs-4"}>
                    Update: I am busy with academics! I'm working on getting ahead in my studies and classes to create
                    the
                    free time that I want in order to learn more on React and Node.js.
                </p>
            </div>
        </div>
    );
}

function TechnologiesCard(props) {
    return (
        <div data-aos="flip-down" className={"technologycard row align-items-center mx-1 mx-sm-2"}>
            <div className={"card mb-3 px-3 col-8"}>
                <div className={"card-body"}>
                    <h3 className={"font-monospace lead fw-bold fs-3 card-title"}>{props.name}</h3>
                    <p className={"card-text"}>{props.description}</p>
                </div>
            </div>
            <div className={"col-3 text-center"}>
                <a href={props.href} target={"_blank"}>
                    <img className={"img"} src={props.image} alt={props.name} width={"100rem"}/>
                </a>
            </div>
        </div>
    );
}

function CurrentTechnologies() {
    return (
        <section data-aos="fade-up" id={"technologies"} className={"mb-4 py-5 border-top"}>
            <h2 className={"text-center display-5 mb-4"}>What went into making this website?</h2>
            <TechnologiesCard name={"HTML, CSS, JavaScript"}
                              description={"The basic tools needed to make any basic website."}
                              image={"./images/icons8-happy-file.svg"}/>
            <TechnologiesCard name={"Bootstrap"}
                              description={"A popular CSS framework that I've used to help quickly style and structure the site."}
                              image={"./images/bootstrap-logo.svg"}
                              href={"https://getbootstrap.com/"}/>
            <TechnologiesCard name={"React"}
                              description={"React is a popular frontend JavaScript library used for building user interfaces."}
                              image={"./images/icons8-react.svg"}
                              href={"https://reactjs.org/"}/>
            <TechnologiesCard name={"Github Pages"}
                              description={"\"GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.\""}
                              image={"./images/icons8-github.svg"}
                              href={"https://pages.github.com/"}/>
            <TechnologiesCard name={"Google Domains"}
                              description={"\"Google Domains is a domain name registrar operated by Google. The service offers domain registration, DNS hosting, dynamic DNS, domain forwarding, and email forwarding. It provides native integration support for Google Cloud DNS and Google Workspace.\""}
                              image={"./images/icons8-google.svg"}
                              href={"https://domains.google/"}/>
        </section>
    );
}

function FutureTechnologies() {
    return (
        <section data-aos="fade-up" id={"technologies"} className={"mb-4 border-top py-5"}>
            <h2 className={"text-center display-5 bg-gradient"}>Plans for this website</h2>
            <div className={"mb-4 mx-3 p-3"}>
                <p>This is my first personal full-stack web development project. My goal for this website project is to
                    learn the basics and tools used for full-stack development, and for me to have some fun with it
                    along the way. There's a lot for me to learn and implement all at once, so the plan is work on
                    changes
                    over time as I learn more. Here are my next goals for my learning and this website project.</p>
            </div>
            <TechnologiesCard name={"Remaking this site"}
                              description={"I'm still in the process of learning React. As I learn more about using React, I'll update and work more on the site to reflect that growth, and for practice."}
                              image={"./images/icons8-construction.svg"}/>
            <TechnologiesCard name={"Node.js"}
                              description={"NodeJS is an open source, cross-platform JavaScript runtime environment. I've just started learning about Node and about using it, but I plan on having my website use NodeJS for React."}
                              image={"./images/Node.js_logo.svg"}
                              href={"https://nodejs.org/en/about/"}/>
            <TechnologiesCard name={"Azure"}
                              description={"Azure is Microsoft's cloud platform that can be used for a lot of things. Once I get comfortable with NodeJS, I'll look into deploying a NodeJS web app on Azure since I cannot do so using GitHub Pages."}
                              image={"./images/icons8-azure.svg"}
                              href={"https://azure.microsoft.com/en-us/"}/>
        </section>
    );
}

function App() {
    return (
        <>
            <JumboTron/>
            <CurrentTechnologies/>
            <FutureTechnologies/>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App/>
);