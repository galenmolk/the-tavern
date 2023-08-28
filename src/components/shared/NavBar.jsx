import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/characters">Characters</Link>
            <Link to="/abilities">Abilities</Link>
        </div>
    );
}
