import Swal from "sweetalert2";
import { uninstallApp } from "../../Storage";

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

function appToUninstall(appId, thisInstalledApp, setInstalledApp, appName) {
    let currentInstalledApps = [...thisInstalledApp]
    const convertedId = parseInt(appId, 10);
    const updatedApps = currentInstalledApps.filter(app => app.id !== convertedId);
    setInstalledApp(updatedApps)
    uninstallApp(appId)
    Swal.fire({
        title: `<strong>${appName} Is Uninstalled</strong>`,
        html: '<i>You can reinstall it from apps page!</i>',
        icon: 'success',
    });
}

const InstalledApp = ({ image, appName, downloads, ratings, appSize, appId, thisInstalledApp, setInstalledApp }) => {
    return (
        <>
            <div className="installed-app-item">
                <div className="installed-app-left">
                    <img src={image} alt="" className="installed-app-icon" />
                    <div className="installed-app-details">
                        <p className="installed-app-name">{appName}</p>
                        <div className="installed-app-states">
                            <div className="installed-app-downloads">
                                <img src="/assets/installed-app-download.svg" alt="" className="download-icon-installed" /> {formatNumber(downloads)}
                            </div>
                            <div className="installed-app-rating">
                                <img src="/assets/icon-ratings.png" alt="" className="installed-app-ratings" /> {ratings}
                            </div>
                            <p className="installed-app-size">{appSize} MB</p>
                        </div>
                    </div>
                </div>
                <div className="installed-app-right">
                    <button onClick={() => appToUninstall(appId, thisInstalledApp, setInstalledApp, appName)} className="uninstall-btn">Uninstall</button>
                </div>
            </div>
        </>
    );
};

export default InstalledApp;