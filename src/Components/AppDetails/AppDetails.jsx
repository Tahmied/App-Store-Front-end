import { use } from "react";
import { useParams } from "react-router";
import { installApp } from "../../Storage";
import AppNotFound from "./AppNotFound";
import RatingsChart from "./Ratingchart";

const apps = fetch('/data.json').then((data)=>data.json())

function findAppById(apps, id) {
  const numericId = parseInt(id, 10);
  return apps.find(app => app.id === numericId);
}

function formatNumber(num) {
  if (isNaN(num) || num === null) {
    return '0';
  }
  if (num >= 1_000_000_000) {
    const formattedNum = (num / 1_000_000_000).toFixed(1);
    return parseFloat(formattedNum) + 'B';
  }
  if (num >= 1_000_000) {
    const formattedNum = (num / 1_000_000).toFixed(1);
    return parseFloat(formattedNum) + 'M';
  }

  if (num >= 1_000) {
    const formattedNum = (num / 1_000).toFixed(1);
    return parseFloat(formattedNum) + 'K';
  }
  return num.toString();
}


const AppDetails = () => {
    const appId = useParams()
    const allApps = use(apps)
    let appToShow = findAppById(allApps, appId.appid)
    if(!appToShow) {
        return <AppNotFound></AppNotFound>
    }
    
    if(!Number.isInteger(Number(appId.appid))) {
        return <AppNotFound></AppNotFound>
    }
    console.log(appToShow)
    return (
        <>
            <section className="app-details">
                <div className="app-details-container">
                    <div className="app-details-icon">
                        <img src={appToShow.image} alt="" className="app-details-icon-img" />
                    </div>
                    <div className="app-details-right">
                        <p className="app-name-title">{appToShow.title}</p>
                        <p className="app-developed-by">Developed by <span className="company-developer">{appToShow.companyName}</span> </p>
                        <hr className="app-details-line" />
                        <div className="app-details-states">
                            <div className="downloads-states">
                                <img src="/public/assets/icon-downloads.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Downloads</p>
                                <p className="download-detail-num">{formatNumber(appToShow.downloads)}</p>
                            </div>
                            <div className="downloads-states">
                                <img src="/public/assets/icon-ratings.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Average Ratings</p>
                                <p className="download-detail-num">{appToShow.ratingAvg}</p>
                            </div>
                            <div className="downloads-states">
                                <img src="/public/assets/icon-review.png" alt="" className="download-details" />
                                <p className="download-detail-tag">Total Reviews</p>
                                <p className="download-detail-num">{formatNumber(appToShow.reviews)}</p>
                            </div>
                        </div>
                        <button onClick={()=>{installApp(appToShow)}} className="app-install-btn">
                            Install Now ({appToShow.size}MB)
                        </button>
                    </div>
                </div>
                <hr className="app-details-below-hr" />
                <div className="rating-section">
                    <p className="ratings-section-title">Ratings</p>
                    <RatingsChart ratingdata={appToShow.ratings}></RatingsChart>
                </div>
                <hr className="app-details-below-hr" />
                <div className="app-details-description">
                    <p className="description-heading">Description</p>
                    <p className="description-text">{appToShow.description}
                    </p>
                </div>
            </section>
        </>
    );
};

export default AppDetails;