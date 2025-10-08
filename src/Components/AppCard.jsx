
const AppCard = () => {
    return (
        <div className="app-card">
            <img src="/public/assets/demo-app (2).webp" alt="" className="app-image" />
            <p className="app-name">Forest: Focus for Productivity</p>
            <div className="app-states">
                <div className="app-downloads">
                    <img src="/assets/icon-downloads.png" alt="" className="download-icon" /> 9M
                </div>
                <div className="app-ratings">
                    <img src="/public/assets/icon-ratings.png" alt="" className="rating-icon" /> 5
                </div>
            </div>
        </div>
    );
};

export default AppCard;