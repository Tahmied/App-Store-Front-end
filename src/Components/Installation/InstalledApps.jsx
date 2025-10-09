import { useState } from "react";

const InstalledApps = ({ installedApps }) => {
    const [isSortBtnOpen, setIsSortBtnOpen] = useState(false)
    console.log(installedApps)
    return (
        <>
            <section className="installed-apps">
                <div className="installed-apps-container">
                    <div className="installed-apps-tool">
                        <p className="installed-app-count">{installedApps.length} Apps Found</p>
                        <button onClick={() => setIsSortBtnOpen(!isSortBtnOpen)} className="sort-button-visual">
                            <span>Sort By Size</span>

                            <img src="/public/assets/arro-icon.svg" alt="" className={`chevron-icon ${isSortBtnOpen ? 'open' : ''}`}/>

                            {isSortBtnOpen && (
                                <ul className="dropdown-menu">
                                    <li>Low to High</li>
                                    <li>High to Low</li>
                                </ul>
                            )}
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
};

export default InstalledApps;