import RatingsChart from "./Ratingchart";

const AppDetails = () => {
    return (
        <>
            <section className="app-details">
                <div className="app-details-container">
                    <div className="app-details-icon">
                        <img src="/public/assets/demo-app (1).webp" alt="" className="app-details-icon-img" />
                    </div>
                    <div className="app-details-right">
                        <p className="app-name-title">SmPlan:ToDo List with Reminder</p>
                        <p className="app-developed-by">Developed by <span className="company-developer">productive.io</span> </p>
                        <hr className="app-details-line" />
                        <div className="app-details-states">
                            <div className="downloads-states">
                                <img src="/public/assets/icon-downloads.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Downloads</p>
                                <p className="download-detail-num">8M</p>
                            </div>
                            <div className="downloads-states">
                                <img src="/public/assets/icon-ratings.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Average Ratings</p>
                                <p className="download-detail-num">4.9</p>
                            </div>
                            <div className="downloads-states">
                                <img src="/public/assets/icon-review.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Total Reviews</p>
                                <p className="download-detail-num">54K</p>
                            </div>
                        </div>
                        <button className="app-install-btn">
                            Install Now (291MB)
                        </button>
                    </div>
                </div>
                <hr className="app-details-below-hr" />
                <div className="rating-section">
                    <p className="ratings-section-title">Ratings</p>
                    <RatingsChart></RatingsChart>
                </div>
                <hr className="app-details-below-hr" />
                <div className="app-details-description">
                    <p className="description-heading">Description</p>
                    <p className="description-text">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                    </p>
                </div>
            </section>
        </>
    );
};

export default AppDetails;