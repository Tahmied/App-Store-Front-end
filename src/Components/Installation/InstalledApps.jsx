import { useState } from "react";
import InstalledApp from "./InstalledApp";
import Noinstallation from "./Noinstallation";

function sortHighToLow(apps, setInstalledApp) {
    console.log(`in the sort fun`)
    const sortedApps = [...apps]
    sortedApps.sort((appA, appB) =>{
        console.log(appB.size - appA.size)
        return  appB.size - appA.size
    })
    console.log(sortedApps)
    setInstalledApp(sortedApps)
}

const InstalledApps = ({ installedApps }) => {
    const [isSortBtnOpen, setIsSortBtnOpen] = useState(false)
    const [thisInstalledApp, setInstalledApp] = useState(() => installedApps)


    return (
        <>
            <section className="installed-apps">
                <div className="installed-apps-container">
                    <div className="installed-apps-tool">
                        <p className="installed-app-count">{thisInstalledApp.length} Apps Found</p>
                        <button onClick={() => setIsSortBtnOpen(!isSortBtnOpen)} className="sort-button-visual">
                            <span>Sort By Size</span>

                            <img src="/public/assets/arro-icon.svg" alt="" className={`chevron-icon ${isSortBtnOpen ? 'open' : ''}`} />

                            {isSortBtnOpen && (
                                <ul className="dropdown-menu">
                                    <li onClick={()=> sortHighToLow(thisInstalledApp, setInstalledApp)}>Low to High</li>
                                    <li onClick={()=> sortHighToLow(thisInstalledApp, setInstalledApp)}>High to Low</li>
                                </ul>
                            )}
                        </button>

                    </div>
                    <div className="installed-apps-container">
                        {
                            thisInstalledApp.length > 0 ? thisInstalledApp.map((app) => {
                                return <InstalledApp thisInstalledApp={thisInstalledApp} setInstalledApp={setInstalledApp} image={app.image} appName={app.title} downloads={app.downloads} ratings={app.ratingAvg} appSize={app.size} appId={app.id} key={app.id}></InstalledApp>
                            }) : <Noinstallation></Noinstallation>

                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default InstalledApps;