function JumboTron() {
    return (
        <div id={"Jumbotron"}
             className={"p-5 mb-5 mx-md-5 bg-gradient border border-success border-opacity-10 rounded-3 shadow-sm"}>
            <div className={"py-5"}>
                <h1 className={"display-4 fw-bold"}>I'm learning <span className={"text-info"}>React</span></h1>
                <p className={"col-md-8 fs-4"}>viverra molestie tibique ex odio deterruisset fastidii montes sadipscing
                    expetendis detracto saepe vituperata euripidis dicta gravida maiestatis expetenda sanctus nam</p>
            </div>
        </div>
    );
}

function TechnologiesCard(props) {
    return (
        <div className={"row align-items-center mx-1 mx-sm-2"}>
            <div data-aos="fade-down-right" className={"card mb-3 px-3 col-8"}>
                <div className={"card-body"}>
                    <h3 className={"font-monospace lead fw-bold fs-3 card-title"}>{props.name}</h3>
                    <p className={"card-text"}>{props.description}</p>
                </div>
            </div>
            <div className={"col-2 text-center"}>
                <img className={"img"} src="./images/dark-mode.png" alt="" width={"100px"}/>
            </div>


        </div>
    );
}

function CurrentTechnologies() {
    return (
        <section id={"technologies"} className={"mb-5 py-5"}>
            <h2 className={"text-center display-5 mb-4"}>What went into making this website?</h2>
            <TechnologiesCard name={"HTML, CSS, JavaScript"} description={"adipiscing feugait vivendo petentium imperdiet graece definitiones vim nascetur similique platonem fastidii eget graecis rhoncus dissentiunt mentitum"} image={""}/>
            <TechnologiesCard name={"Bootstrap"} description={"at vituperatoribus doctus vidisse sanctus dissentiunt mutat mei placerat iusto dicat vivamus sapientem gubergren potenti mentitum quaerendum amet"} image={""}/>
            <TechnologiesCard name={"React"} description={"lacinia labores evertitur verterem errem novum noluisse habitant sapientem penatibus vituperata iudicabit splendide singulis interdum montes dicit falli sociosqu qui"} image={""}/>
            <TechnologiesCard name={"Github Pages"} description={"veniam rhoncus semper a egestas pulvinar in civibus tristique adipiscing mandamus gloriatur sadipscing ridiculus congue consul porta dictum lobortis dicat"} image={""}/>
            <TechnologiesCard name={"Google Domains"} description={"pertinax oporteat qualisque verterem non fabulas torquent facilisis eleifend postea iudicabit aperiri euripidis deseruisse suspendisse solum indoctum veri epicuri sociis"} image={""}/>
        </section>
    );
}

function FutureTechnologies() {
    return (
        <section id={"technologies"} className={" mb-5 py-5"}>
            <h2 className={"text-center display-5"}>Plans for this website</h2>
            <div className={"mb-4 mx-3 p-3"}>
                <p>hinc altera elaboraret graeco praesent quod ubique invidunt interpretaris feugiat dicant similique expetendis accusata gravida singulis aenean idque alterum quaestio ornatus equidem conubia lacinia mollis fastidii class molestie rutrum aliquip adhuc omittantur dicunt ea mandamus consequat accusata</p>
            </div>
            <TechnologiesCard name={"More learning and updating the site"} description={"doctus prompta quem laoreet errem vitae erat volumus persecuti bibendum massa sollicitudin pretium inceptos possim ad utamur mattis nullam eros fabulas graeci praesent"} image={""}/>
            <TechnologiesCard name={"Azure"} description={"tale consectetur pro gloriatur verear numquam eros habeo repudiare pretium te quot ornare appareat efficitur platea has ad maiorum solum"} image={""}/>
            <TechnologiesCard name={"Node.js"} description={"sapien epicurei solum voluptaria hac ferri vestibulum disputationi iuvaret facilisis singulis propriae alia honestatis efficitur graece cursus cursus rhoncus necessitatibus putent docendi suavitate"} image={""}/>
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