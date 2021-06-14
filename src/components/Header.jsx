import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h2>TECH VALLEY</h2>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/technology">TECHNOLOGY</a></li>
                    <li><a href="/security">SECURITY</a></li>
                    <li><a href="/about">PROGRAMMING</a></li>
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