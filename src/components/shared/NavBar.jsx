import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/the-tavern/characters">Characters</Link>
            <Link to="/the-tavern/abilities">Abilities</Link>
        </div>
    );
}
