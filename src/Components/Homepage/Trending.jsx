import { Suspense, use } from "react";
import AppCard from "../AppCard";

const appData = fetch('/data.json').then((res)=> res.json())

const Trending = () => {
    const apps = use(appData)
    return (
        <>
            <section className="trending">
                <p className="trending-title">Trending Apps</p>
                <p className="trending-description">Explore All Trending Apps on the Market developed by us</p>

                <div className="trending-container">
                    <Suspense fallback="Loading...">
                        {
                            apps.map(app => {
                                return <AppCard key={app.id} name={app.title} image={app.image} downloads={app.downloads} ratings={app.ratingAvg}></AppCard>
                            })
                        }
                    </Suspense>

                    <div className="app-card">
                        <img src="/assets/demo-app (2).webp" alt="" className="app-image" />
                        <p className="app-name">Forest: Focus for Productivity</p>
                        <div className="app-states">
                            <div className="app-downloads">
                                <img src="/assets/icon-downloads.png" alt="" className="download-icon" /> 9M
                            </div>
                            <div className="app-ratings">
                                <img src="/assets/icon-ratings.png" alt="" className="rating-icon" /> 5
                            </div>
                        </div>
                    </div>

                    <div className="app-card">
                        <img src="/assets/demo-app (2).webp" alt="" className="app-image" />
                        <p className="app-name">Forest: Focus for Productivity</p>
                        <div className="app-states">
                            <div className="app-downloads">
                                <img src="/assets/icon-downloads.png" alt="" className="download-icon" /> 9M
                            </div>
                            <div className="app-ratings">
                                <img src="/assets/icon-ratings.png" alt="" className="rating-icon" /> 5
                            </div>
                        </div>
                    </div>

                    <div className="app-card">
                        <img src="/assets/demo-app (2).webp" alt="" className="app-image" />
                        <p className="app-name">Forest: Focus for Productivity</p>
                        <div className="app-states">
                            <div className="app-downloads">
                                <img src="/assets/icon-downloads.png" alt="" className="download-icon" /> 9M
                            </div>
                            <div className="app-ratings">
                                <img src="/assets/icon-ratings.png" alt="" className="rating-icon" /> 5
                            </div>
                        </div>
                    </div>

                    <div className="app-card">
                        <img src="/assets/demo-app (2).webp" alt="" className="app-image" />
                        <p className="app-name">Forest: Focus for Productivity</p>
                        <div className="app-states">
                            <div className="app-downloads">
                                <img src="/assets/icon-downloads.png" alt="" className="download-icon" /> 9M
                            </div>
                            <div className="app-ratings">
                                <img src="/assets/icon-ratings.png" alt="" className="rating-icon" /> 5
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Trending;