import './contact.css';
import Contact_form from './components/contact_form/contact_form.jsx';
import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';

function Contact() {

    return (
        <>
            <Top_container bg_color={"white"}>
                <div>
                    <div id="title">
                        <h3 className='h3-spred'>WELCOME TO OUR SPACE</h3>
                        <h1>Contact Us</h1>
                        <div className='base'>Geospatial Services || Geological Services || Hydrogeological Solutions || Environmental modeling || Watershed Management Services || Geophysical Services</div>
                    </div>
                </div>
            </Top_container>
            <Body_Container id='contact-body'>
                <Contact_form />
            </Body_Container>
        </>
    )
}

export default Contact