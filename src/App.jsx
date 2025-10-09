import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import AppDetails from './Components/AppDetails/AppDetails'
import Apps from './Components/Apps/Apps'
import Errorpage from './Components/ErrorPage'
import Home from './Components/Homepage/Home'
import Installation from './Components/Installation/Installation'
import Root from './Components/Root'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      children: [
        {
          index: true, Component: Home, loader: () => fetch('/data.json'),
        },
        {
          path: 'apps', Component: Apps, loader: () => fetch('/data.json'),
        },
        {
          path: 'installation', Component: Installation
        },
        {
          path: 'app/:appid', Component: AppDetails
        },
        {
          path: '*', Component: Errorpage
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
