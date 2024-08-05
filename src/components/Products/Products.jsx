import './products.css';
import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';
import { Link } from 'react-router-dom';
import To_top from '../../utill/To_top';
import { products_top, sTEM1, sTEM2, sTEM3, sTEM4, sTEM5, sTEM6, tTEM1, tTEM2, tTEM3, floaTEM1, floaTEM2 } from '../../utill/images.jsx'

export default function Products() {

    const { scrollToTop } = To_top()

    return (
        <>
            <Top_container bg_image={products_top}>
                <div>
                    <div id="title" className='bg-w-t'>
                        <h1>We are Providing</h1>
                        <h3 className='h3-spred'>WELCOME TO OUR SPACE</h3>
                    </div>
                </div>
            </Top_container>
            <Body_Container id="prduct-body">
                <div className="page-body">
                    <h3>sTEM and sTEM+</h3>
                    <div className='prod-body'>
                        <div className='prod-desc'>
                            <div>
                                The sTEM geoscanner is a unique invention for precise and efficient groundwater surveys. Conduct single-site measurements, capturing data that reaches depths beyond 300 m (980ft). With its affordability and robustness, the sTEM geoscanner is operated via Android or iOS app and offers valuable insights into groundwater resources. The sTEM geoscanner ensures efficient surveys with reliable performance. Its transmitter capacity enables robust measurements, covering a substantial area per station.
                                <br /><br />
                                Designed for convenience, the lightweight and portable sTEM geoscanner, with transmitter wire and receiver cable weighs approximately a total of only 30 kg. It can be easily transported in a solid shipping box as check-in luggage on airplanes. With Wi-Fi and internet connectivity, enjoy seamless data upload and remote support.
                            </div>
                            <br />
                            <figure>
                                <figcaption><strong>Unique features of the sTEM and sTEM+ instruments</strong></figcaption>
                                <ul>
                                    <li>Dual-moment system for shallow and deep information</li>
                                    <li>Integrated Tx and Rx hardware in one unit</li>
                                    <li>Transmitter loop size: 20 x 20 m or 40 x 40 m options(65 x 65 feet, 131 x 131 feet)</li>
                                    <li>Active current regulation, 1 A low transmitter moment 5/10 A high transmitter moment (sTEM/sTEM+)</li>
                                    <li>Depth of investigation: Up to 300 m (980 ft)</li>
                                    <li>Power supply: Two 14,4 V lithium batteries at 99Wh each. Corresponds to a full day of operation</li>
                                    <li>Total weight (including transmitter and receiver coils): around 32 kg (70.5 lbs).</li>
                                    <li>Portability: Shipping box for convenient airplane check-in.</li>
                                    <li>Connectivity: Wi-Fi and internet for remote support and upload of data to cloud</li>
                                    <li>Operated by Android and iOS App</li>
                                    <li>Suppression of external noise by tapered gating</li>
                                    <li>Real-time data stacking and calculation of data certainties</li>
                                    <li>Automatic sign correction of data</li>
                                    <li>Real-time data inversion</li>
                                </ul>
                            </figure>
                            <div className='enq'>
                                <a className='btn' href="https://www.temcompany.com/project/the-snowtem-geoscanner/">Explore More</a>
                                <Link onClick={scrollToTop} className='btn' to="/contact">Enquiry Now</Link>
                            </div>
                        </div>
                        <div id='stem' className='products'>
                            <img src={sTEM1} alt="" />
                            <img src={sTEM2} alt="" />
                            <img src={sTEM3} alt="" />
                            <img src={sTEM4} alt="" />
                            <img src={sTEM5} alt="" />
                            <img src={sTEM6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="page-body">
                    <h3>tTEM</h3>
                    <div className='prod-body'>
                        <div className='prod-desc'>
                            <div>
                                The tTEM geoscanner revolutionizes land-based groundwater mapping. It is designed to be towed by an All-Terrain Vehicle (ATV) / Quad bike to create high-resolution subsurface layer images. The system can be configured with different sizes of the transmitter coil by changing the length of the fiberglass beams (wings) carrying the coil. This makes it possible to easily adapt the system for specific survey requirements and field conditions, if a survey requires a certain depth of investigation, a large coil with maximum area can be mounted. Or if a survey needs to be carried out in tracks, a smaller coil which fit the width of the tracks can be mounted.
                                <br /><br />
                                Surveys cover areas from tens to thousands of hectares (2 - 2000 acres), with a depth of
                                investigation ranging from a meter or two below the surface to an impressive 180-200 meters (600 - 650 feet) depending on configuration. The area of the transmitter coil directly affects the depth of investigation, with larger area resulting in deeper penetration. Increasing the number of turns also increases the depth of investigation but it comes at the expense of losing the very shallow layer resolution.
                                <br /><br />
                                The tTEM geoscanner allows surveys along lines or in full 3D, offering comprehensive coverage. It enables detailed imaging of subsurface features, making it invaluable for various applications. Pinpoint new well locations, explore hydrogeological mapping in 3D, and more with the tTEM geoscanner&apos;s exceptional results.
                                <br /><br />
                                Superior Data Quality tTEM geoscanner leverages advanced electronics, microcontrollers, and computers for maximum potential. It withstands challenging field conditions while delivering high-quality data. The instrument&apos;s craftsmanship and robust design ensure reliability and accuracy in measurements.
                            </div>
                            <br />
                            <figure>
                                <figcaption><strong>Key Technical Details tTEM:</strong></figcaption>
                                <ul>
                                    <li>Driving speed: up to 20 km/h (12 miles/h)</li>
                                    <li>Depth of investigation: up to 130 m (430 feet) or 180 m (600 feet) depending on configuration</li>
                                    <li>Power supply: 12 V lithium battery</li>
                                    <li>Pulse frequency: 2000 Hz for low moment (3 Amp) and 630 Hz for high moment (30 Amp)</li>
                                    <li>First gate centered in 4 microseconds from the beginning of the current turn-off on lowmoment.</li>
                                    <li>Wi-Fi and internet-enabled for remote support and data upload</li>
                                </ul>
                            </figure>
                            <div className='enq'>
                                <a className='btn' href="https://www.temcompany.com/project/the-snowtem-geoscanner/">Explore More</a>
                                <Link onClick={scrollToTop} className='btn' to="/contact">Enquiry Now</Link>
                            </div>
                        </div>
                        <div id='ttem' className='products'>
                            <img src={tTEM1} alt="" />
                            <img src={tTEM2} alt="" />
                            <img src={tTEM3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="page-body">
                    <h3>FloaTEM</h3>
                    <div className='prod-body'>
                        <div className='prod-desc'>
                            <div>
                                FloaTEM setup redefines aquatic geophysical surveys, offering high-resolution subsurface imaging while floating on water. This instrument is an indispensable tool for mapping aquifers, investigating water bodies, and enhancing our understanding of underwater geological structures with an innovative solution built on the foundation of the revolutionary tTEM platform. FloaTEM is in general terms a tTEM system adapted to the aquatic environment and is used to characterize the interaction between river and lake water bodies and the groundwater system or to characterize sea bottom sediments below shallow saltwater. The FloaTEM kit converts a tTEM system to be used in freshwater. For saltwater applications, an add-on is necessary to increase the power of the system.
                                <br /><br />
                                Built on the reputable tTEM platform, FloaTEM inherits unparalleled data quality, versatility, and robustness. FloaTEM stands as a testament to innovation in the field of hydrogeophysics, making it an indispensable asset for scientists, researchers, and organizations dedicated to unlocking the mysteries of underwater landscapes.
                            </div>
                            <br />
                            <figure>
                                <figcaption><strong>The FloaTEM system comes with:</strong></figcaption>
                                <ul>
                                    <li>2 durable rubber boats for transmitter and receiver platform</li>
                                    <li>1 set of towing ropes for FloaTEM operations</li>
                                    <li>2 receiver cables</li>
                                    <li>1 transmitter coil</li>
                                    <li>Choice of 331, 333 or 443, two first digits is the side length of the coil, third digit is the number of turns.</li>
                                </ul>
                            </figure>
                            <div className='enq'>
                                <a className='btn' href="https://www.temcompany.com/project/the-snowtem-geoscanner/">Explore More</a>
                                <Link onClick={scrollToTop} className='btn' to="/contact">Enquiry Now</Link>
                            </div>
                        </div>
                        <div id='ftem' className='products'>
                            <img src={floaTEM1} alt="" />
                            <img src={floaTEM2} alt="" />
                        </div>
                    </div>
                </div>
            </Body_Container>
        </>
    )
}