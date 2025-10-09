import { Link } from "react-router";

const AppNotFound = () => {
    return (
        <div className='app-not-found'>
            <div className="app-not-found-container">
                <img src="/assets/error-404.png" alt="" className="app-not-found-img" />
                <p className="not-found-text">OPPS!! page not found</p>
                <p className="not-found-desc">The page you are looking for is not available.</p>
                <Link to={-1}>
                <button className="back-btn-not-found">Go Back!</button>
                </Link>
            </div>
        </div>
    );
};

export default AppNotFound;