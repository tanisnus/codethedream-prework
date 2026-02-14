import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            {/* Beginning of Navbar container */}
            <div className="navbar-container">

                
                <ul className="navbar-menu">
                    <li>
                        <Link to="/top-scores">Top Scorers</Link>
                    </li>
                    <li>
                        <Link to="/top-assists">Top Assists</Link>
                    </li>
                </ul>

            </div>
            {/* Ending navbar container */}
        </nav>
    )
}

export default Navbar;