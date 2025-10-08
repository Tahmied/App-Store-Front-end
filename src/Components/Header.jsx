import { NavLink } from "react-router";

const Header = () => {
    return (
        <>
        <header>
            <div className="header-container">
            
                <div className='logo'>
                    <img src="/assets/logo.png" alt="" className="logo-icon" />
                    <span className="logo-text">HERO.IO</span>
                </div>

                <div className='menu'>
                    <ul className="nav-list">
                        <NavLink className="nav-item" to='/'>Home</NavLink>
                        <NavLink className="nav-item" to='/apps'>Apps</NavLink>
                        <NavLink className="nav-item" to='/Installation'>Installation</NavLink>
                    </ul>
                </div>

                <div className="header-cta">
                    <button className="header-cta-btn">
                        <img src="/assets/github-logo.svg" alt="" className="header-cta-img" />
                        Contribute
                    </button>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;