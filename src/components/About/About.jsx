import './about.css';
import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';
import { about_top } from '../../utill/images.jsx'
import { clint_logo1, clint_logo2, clint_logo3, clint_logo4, clint_logo5, clint_logo6, clint_logo7, clint_logo8, clint_logo9, clint_logo10, clint_logo11, clint_logo12, clint_logo13, clint_logo14, clint_logo15, clint_logo16, clint_logo17, clint_logo18, clint_logo19 } from '../../utill/images.jsx'
import { sanjeet, shobhit, manish } from '../../utill/images.jsx'
function About() {

    return (
        <>
            <Top_container bg_image={about_top}>
                <div>
                    <div id="title" className='bg-w-t'>
                        <h3 className='h3-spred'>WELCOME TO OUR SPACE</h3>
                        <h1>Here We Are</h1>
                        <div className='base'>All Geo Solutions: Unleashing Ideas, Inspiring Innovation, Driving Implementation.</div>
                    </div>
                </div>
            </Top_container>
            <Body_Container>
                <div className='bg-w-t page-body'>
                    <h3>Our Journey</h3>
                    <div>
                        Welcome to AllGeo Solutions, a leading and dynamic organization dedicated to providing comprehensive solutions in the fields of Geology, Hydrogeology, Geophysical survey, Groundwater Explorations, and Environmental Services across the country.At AllGeo Solutions, we pride ourselves on our team of highly skilled and passionate professionals who possess extensive expertise in their respective domains. With a collective commitment to excellence and sustainability, we strive to meet the diverse needs of our clients, ranging from government agencies and private enterprises to non-profit organizations.Geology forms the foundation of our work, as we delve into the Earth&apos;s composition and geological processes to gain valuable insights into various projects. Our team of geologists excels in conducting in-depth surveys and assessments, identifying potential geological hazards, and providing informed guidance for successful project execution.Hydrogeology is another core pillar of our organization, as we focus on studying the distribution and movement of groundwater. Our experts in this field play a crucial role in sustainable water resource management, ensuring responsible utilization and preservation of this invaluable natural asset.With advanced geophysical survey techniques, we explore subsurface structures and resources, enabling clients to make informed decisions and optimize their ventures. Our precise data interpretation empowers projects with accuracy and efficiency.
                        <br />
                        <br />
                        Groundwater explorations are among our specialties, as we employ cutting-edge technology and methodologies to locate and assess groundwater sources. This vital service aids various industries, including agriculture, urban planning, and water supply management.
                        <br />
                        <br />
                        Environmental services hold a special place in our hearts, as we are dedicated to creating a positive impact on the planet. Embracing sustainable practices, our organization aims to minimize environmental impacts and promote eco-friendly solutions for a greener and healthier future.
                        <br />
                        <br />
                        At AllGeo Solutions , our mission is to provide integrated and holistic solutions that contribute to the betterment of society and the environment. We constantly adapt to technological advancements and stay at the forefront of our industry, ensuring that our clients receive the most innovative and effective services available. As we continue to expand our reach and impact, we remain committed to maintaining the highest standards of professionalism, ethics, and excellence. Together with our valued clients and partners, we strive to build a sustainable and prosperous future for generations to come.
                        <br />
                        <br />
                        Thank you for joining us on this journey as we work towards a better, more sustainable world through Geology, Hydrogeology, Geophysical survey, Groundwater exploration, and Environmental Services.
                    </div>
                </div>
                <div id='about-card' className='page-body'>
                    <div className="card-container">
                        <div className="card">
                            <div className='card-front'>Our Vision</div>
                            <div className='card-back'>Our  Vision is to be acknowledged as the top supplier of solutions in our industry, establishing the standard for quality and creativity.</div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div className='card-front'>Our Mission</div>
                            <div className='card-back'>The pillars of our operations-integrity, discipline, professionalism, and innovation-serve as our compass in all that we do.</div>
                        </div>
                    </div>
                </div>
                <div id='attr-obj' className='bg-w-t page-body'>
                    <div className="about-cols">
                        <h4>Attributes That Distinguish Us</h4>
                        <span className="attributes">Long-Term Trusted Relationships: Based on dependability and trust, we cultivate enduring relationships with our clients.</span>
                        <span className="attributes">Full Life-Cycle Services: We provide an all-inclusive range of services, from design to field implementation.</span>
                        <span className="attributes">Complete Solutions: We guarantee that we offer comprehensive solutions that are suited to your demands thanks to the breadth of our products.</span>
                        <span className="attributes">Competitive Pricing: We think that value should be delivered without sacrificing cost.</span>
                    </div>
                    <div className="about-cols">
                        <h4>Our Main Objectives</h4>
                        <span>Our main focus is on the practical application of hydrogeology, geodesy, geology, and watershed management in a range of industries, such as:</span>
                        <br />
                        <span className="attributes">Groundwater investigation, or geophysical exploration</span>
                        <span className="attributes">Energy and Mineral Resources</span>
                        <span className="attributes">Planning Land Use</span>
                        <span className="attributes">Project management and design for civil construction</span>
                    </div>
                </div>
                <div className='page-body'>
                    <h3>Our Clients</h3>
                    <div id='clients'>
                        <img src={clint_logo1} alt="" />
                        <img src={clint_logo2} alt="" />
                        <img src={clint_logo3} alt="" />
                        <img src={clint_logo4} alt="" />
                        <img src={clint_logo5} alt="" />
                        <img src={clint_logo6} alt="" />
                        <img src={clint_logo7} alt="" />
                        <img src={clint_logo8} alt="" />
                        <img src={clint_logo9} alt="" />
                        <img src={clint_logo10} alt="" />
                        <img src={clint_logo11} alt="" />
                        <img src={clint_logo12} alt="" />
                        <img src={clint_logo13} alt="" />
                        <img src={clint_logo14} alt="" />
                        <img src={clint_logo15} alt="" />
                        <img src={clint_logo16} alt="" />
                        <img src={clint_logo17} alt="" />
                        <img src={clint_logo18} alt="" />
                        <img src={clint_logo19} alt="" />
                    </div>
                </div>
                <div className='page-body'>
                    <h3>Our Pillars</h3>
                    <div id='pillars'>
                        <div className="img-card">
                            <img src={sanjeet} alt="Sanjeet Sharma" />
                            <h4 className="name">Sanjeet Sharma</h4>
                            <span className="role">Founder AllGeos Solution</span>
                        </div>
                        <div className="img-card">
                            <img src={shobhit} alt="Shobhit Kumar" />
                            <h4 className="name">Shobhit Kumar</h4>
                            <span className="role">Co-Founder AllGeos Solution</span>
                        </div>
                        <div className="img-card">
                            <img src={manish} alt="Manish Yadav" />
                            <h4 className="name"> Manish Yadav</h4>
                            <span className="role">Co-Founder AllGeos Solution</span>
                        </div>
                    </div>
                </div>
            </Body_Container>
        </>
    )
}

export default About