import './footer.css';
import { useState } from 'react';
import { footer1, footer2, footer3, footer4 } from '../../utill/images';
import { Link } from 'react-router-dom';

// const topFunction = ()=>{

// }


function Footer() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);


    return (
        <>
            <footer id='footer'>
                <div>
                    <div id="footer-info">
                        <div className="footeinfo-side" id="footeinfo-area-1">
                            <div>
                                AllGeo Solutions is a leading provider of geoscience and environmental services, specializing in GIS, remote sensing, groundwater exploration, geological mapping, geophysical surveys, and borehole geophysical logging
                            </div>
                        </div>
                        <div className="footeinfo-links" id="footeinfo-area-2">
                            <h4 className="footer-headings"> Our Pages</h4>
                            <div className='page-links'>
                                <Link to="/">Home</Link>
                                <Link to="/about">About Us</Link>
                                <Link to="/">Services</Link>
                                <Link to="/products">Products</Link>
                                <Link to="/blogs">Blog</Link>
                                <Link to="/contact">Contsct Us</Link>
                            </div>
                        </div>
                        <div className="footeinfo-links" id="footeinfo-area-3">
                            <h4 className="footer-headings">Other Links</h4>
                            <div className='page-links'>
                                <Link to="/">Terms And Conditions</Link>
                                <Link to="/">Privacy Policy</Link>
                                <Link to="/">FAQ&apos;s</Link>
                            </div>
                        </div>
                        <div className="footeinfo-side" id="footeinfo-area-4">
                            <h4 className="footer-headings">Recognized By</h4>
                            <div id='recognized-grid'>
                                <img className='rec_img_s' src={footer1} alt="MSME_logo" />
                                <img className='rec_img_s' src={footer2} alt="STPI_logo" />
                                <img className='rec_img_s' src={footer3} alt="MEITY_logo" />
                                <img id='rec_img_l' src={footer4} alt="TEM_company_logo" />
                            </div>
                        </div>
                    </div>
                    <div id="dev-copyright">
                        <span id="dc-1">&copy; Copyright by <em>AllGeo Solutions</em></span>
                        <span id="dc-2">| |</span>
                        <span id="dc-3">Developed by <em>UMID Infotech</em></span>
                    </div>
                </div>
            </footer>
            <span onClick={scrollToTop} style={{ opacity: visible ? 1 : 0 }} id='to-top'>
                <svg viewBox=" 0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" fill="#fff" /></svg>
            </span>
        </>
    )
}

export default Footer