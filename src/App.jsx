import './App.css'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import TopScore from '../pages/TopScore'
import TopAssist from '../pages/TopAssist'

function PagesLayout() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
    </>
  )
}

const web_pages_router = createBrowserRouter([
  { 
    path: '/', 
    element: <PagesLayout />,
    children: [
      {
        index: true,
        element: <TopScore />
      },
      {
        path: 'top-scores',
        element: <TopScore />
      },
      {
        path: 'top-assists',
        element: <TopAssist />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={web_pages_router} />
}

export default App
