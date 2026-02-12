import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const web_pages_router = createBrowserRouter([
  { path: '/', 
    element: <Home /> },
])

function App() {
  return <RouterProvider router={web_pages_router} />
}

export default App
