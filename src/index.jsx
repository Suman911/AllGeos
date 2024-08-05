import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout  from './utill/Layout.jsx';
import Home  from './components/Home/Home.jsx'
import Contact  from './components/Contact/Contact.jsx'
import About  from './components/About/About.jsx'
import Blogs  from './components/Blogs/Blogs.jsx'
import Products  from './components/Products/Products.jsx'
import Geophysical  from './components/Geophysical/Geophysical.jsx'
import Geospatial  from './components/Geospatial/Geospatial.jsx'
import Geological  from './components/Geological/Geological.jsx'
import Envionmental  from './components/Envionmental/Envionmental.jsx'
import Hydrogeological  from './components/Hydrogeological/Hydrogeological.jsx'
import Temp  from './utill/Temp.jsx'
import PagenotFound  from './utill/PagenotFound.jsx'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='geophysical' element={<Geophysical />} />
            <Route path='geological' element={<Geological />} />
            <Route path='geospatial' element={<Geospatial />} />
            <Route path='envionmental' element={<Envionmental />} />
            <Route path='hydrogeological' element={<Hydrogeological />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='Temp' element={<Temp />} />
            <Route path=':var' element={<PagenotFound />} />
        </Route>
    )
)