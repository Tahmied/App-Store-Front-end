export function getInstalledApps() {
  const installedApps = localStorage.getItem('installedApps')
  if (!installedApps) {
    return []
  }
  try {
    return JSON.parse(installedApps);
  } catch (err) {
    console.error("Error parsing installed apps from localStorage:", err)
  }
}

export function installApp(appToInstall) {
  const currentApps = getInstalledApps()
  const isAlreadyInstalled = currentApps.some(app => app.id === appToInstall.id)

  if (isAlreadyInstalled) {
    console.log(`"${appToInstall.title}" is already installed.`)
    return
  }
  const updatedApps = [...currentApps, appToInstall];
  localStorage.setItem('installedApps', JSON.stringify(updatedApps))
}
