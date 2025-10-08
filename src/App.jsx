import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Apps from './Components/Apps/Apps'
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
          index:true, Component: Home
        },
        {
          path: '/apps', Component: Apps
        },
        {
          path: '/installation', Component: Installation
        }
      ]
    }
  ])

  // routes will be here
  
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
