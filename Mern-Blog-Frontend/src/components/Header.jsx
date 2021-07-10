import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h2>TECH VALLEY</h2>
            </div>
            <div className="menu">
                <ul>
                    <Link to="/" style={{ textDecoration : "none"}}>
                        <li>HOME</li>
                    </Link>
                    <Link to="/category/Technology" style={{ textDecoration : "none"}}>
                        <li>TECHNOLOGY</li>
                    </Link>
                    <Link to="/category/Security" style={{ textDecoration : "none"}}>
                        <li>SECURITY</li>
                    </Link>
                    <Link to="/category/Programming" style={{ textDecoration : "none"}}>
                        <li>PROGRAMMING</li>
                    </Link>
                    <Link to="/new-article" style={{ textDecoration : "none"}}>
                        <li>NEW ARTICLE</li>
                    </Link>
                </ul>
            </div>
            <div className="search">
                <input type="search" />
                <button>SEARCH</button>
            </div>
        </div>
    )
}

export default Header;