import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home'
import Fruits from './Components/Fruits/Fruits';
import Dairy from './Components/Dairy/Dairy';
import SeaFood from './Components/SeaFood/Seafood';
import Allproducts from './Components/AllProducts/Allproducts';
import Layout from './Components/Layout/Layout';

const App = () => {

  const router = createBrowserRouter([
    // {
    //   path: '/', element: <Home />
    // },
    // {
    //   path: '/fruits', element: <Fruits />
    // },
    //  {
    //   path: '/dairy', element: <Dairy />
    // },
    //  {
    //   path: '/seafood', element: <SeaFood />
    // },
    //  {
    //   path: '/allproducts', element: <Allproducts />
    // }

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/', element: <Home />
        },
        {
          path: '/fruits', element: <Fruits />
        },
        {
          path: '/dairy', element: <Dairy />
        },
        {
          path: '/seafood', element: <SeaFood />
        },
        {
          path: '/allproducts', element: <Allproducts />
        }
      ]
    },

  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App