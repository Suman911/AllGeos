import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Products from './components/Products/Products.jsx'
import Temp from './utill/Temp.jsx'
import Page_notFound from './utill/Page_notFound.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './main.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='products' element={<Products />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='contact' element={<Contact />} />
      <Route path='Temp' element={<Temp />} />
      <Route path=':var' element={<Page_notFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
