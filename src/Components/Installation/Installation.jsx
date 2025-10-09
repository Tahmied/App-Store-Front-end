import { getInstalledApps } from "../../Storage";
import InstallationHero from "./InstallationHero";
import InstalledApps from "./InstalledApps";

const Installation = () => {
    let installedApps = getInstalledApps()
    return (
        <>
        <InstallationHero></InstallationHero>
        <InstalledApps installedApps={installedApps}></InstalledApps>
        </>
    );
};

export default Installation;