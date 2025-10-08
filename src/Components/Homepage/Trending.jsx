import { use } from "react";
import { Link } from "react-router";
import AppCard from "../AppCard";

const appData = fetch('/data.json').then((res)=> res.json())

const Trending = () => {
    const apps = use(appData)
    const homeApps = apps.slice(0, 8);
    console.log(apps, homeApps)
    return (
        <>
            <section className="trending">
                <p className="trending-title">Trending Apps</p>
                <p className="trending-description">Explore All Trending Apps on the Market developed by us</p>

                <div className="trending-container">
                        {
                            homeApps.map(app => {
                                return <AppCard key={app.id} name={app.title} image={app.image} downloads={app.downloads} ratings={app.ratingAvg}></AppCard>
                            })
                        }
                </div>
                <Link to='/apps' className="all-apps-link"><button className="all-apps-btn">Show All</button></Link>
            </section>
        </>
    );
};

export default Trending;