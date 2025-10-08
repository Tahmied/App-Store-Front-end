
const AppCard = ({image, name, downloads, ratings}) => {
    return (
        <div className="app-card">
            <img src={image} alt="" className="app-image" />
            <p className="app-name">{name}</p>
            <div className="app-states">
                <div className="app-downloads">
                    <img src="/assets/icon-downloads.png" alt="" className="download-icon" /> {downloads}
                </div>
                <div className="app-ratings">
                    <img src="/public/assets/icon-ratings.png" alt="" className="rating-icon" /> {ratings}
                </div>
            </div>
        </div>
    );
};

export default AppCard;