import './blogs.css';
import Contact_form from '../Contact/components/contact_form/contact_form.jsx';
import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';

function Blogs() {

    return (
        <><Top_container>
            <div className='top'>
                <div id="title" className='bg-w-t'>
                    <h1>Welcome To AllGeo Solutions</h1>
                    <h3><em>&quot;Navigating Earth&apos;s Complexities, Delivering Solutions&quot;</em></h3>
                    <div className='base'>Geospatial Services || Geological Services || Geophysical Services || Hydrogeological Solutions || Environmental Services</div>
                </div>
            </div>
        </Top_container>
            <Body_Container id='blog-body' bg_color='white'>
                <Contact_form />
            </Body_Container>
        </>
    )
}

export default Blogs