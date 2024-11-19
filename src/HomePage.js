import "./HomePage.css";

const HomePage = ({onStart}) => {
    return(
        <div className="HomePage">
            <header className="titleBar">
                <h1 className="titleLogo roboto-slab-logo">Ascend</h1>
                <button onClick={onStart} className="get-started-button mona-sans-extra">
                Get Started
            </button>
            </header>
            <div className="HomePage-content">
                <p className="motto cormorant-garamond-medium">Empower Your <br /> Business, <br /> One Insight at a Time</p>
            </div>

        </div>
    )
};

export default HomePage;