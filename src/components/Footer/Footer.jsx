import './footer.css';
import { footer1, footer2, footer3, footer4 } from '../../utill/images';
import { Link } from 'react-router-dom';
import To_top from '../../utill/To_top';

function Footer() {

    const { visible, scrollToTop } = To_top()

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
                                <Link onClick={scrollToTop} to="/">Home</Link>
                                <Link onClick={scrollToTop} to="/about">About Us</Link>
                                <Link onClick={scrollToTop} to="/Temp">Services</Link>
                                <Link onClick={scrollToTop} to="/products">Products</Link>
                                <Link onClick={scrollToTop} to="/blogs">Blog</Link>
                                <Link onClick={scrollToTop} to="/contact">Contsct Us</Link>
                            </div>
                        </div>
                        <div className="footeinfo-links" id="footeinfo-area-3">
                            <h4 className="footer-headings">Other Links</h4>
                            <div className='page-links'>
                                <Link onClick={scrollToTop} to="/#">Terms And Conditions</Link>
                                <Link onClick={scrollToTop} to="/#">Privacy Policy</Link>
                                <Link onClick={scrollToTop} to="/#">FAQ&apos;s</Link>
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
                        <span id="dc-1">&copy; Copyright by
                            <a href="https://github.com/Suman911/AllGeos"><em>Suman911@GitHub</em></a>
                        </span>
                        <span id="dc-2">| |</span>
                        <span id="dc-3">Developed by 
                            <a href="https://www.linkedin.com/in/suman-mondal-ba0757238"><em>Suman Mondal</em></a>
                        </span>
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
