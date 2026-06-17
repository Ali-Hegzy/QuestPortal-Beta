import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="nav-actions">
                <button
                    className="btn-nav"
                    onClick={() => window.history.back()}>
                    <span className="icon-back "></span> Back
                </button>
                <a href="/" className="btn-nav">
                    <span className="icon-home"></span> Home
                </a>
            </nav>
        </>
    );
}
