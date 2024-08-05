import './home.css';
import Contact_form from '../Contact/components/contact_form/contact_form.jsx';
import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';
import { home_demo, home1, home2, home3, home4 } from '../../utill/images';
import Detail from '../../utill/Detail.jsx';

function Home() {

    return (
        <>
            <Top_container>
                <div id='h-top' className='top'>
                    <div id="title">
                        <h1>Welcome To AllGeo Solutions</h1>
                        <h3><em>&quot;Navigating Earth&apos;s Complexities, Delivering Solutions&quot;</em></h3>
                    </div>
                    <div className='base'>Geospatial Services || Geological Services || Geophysical Services || Hydrogeological Solutions || Environmental Services</div>
                </div>
            </Top_container>
            <Body_Container id='home-body' bg_color='white'>
                <div className='page-body' id="h-about">
                    <h3>About Us</h3>
                    <div>
                        <div className="ha-cols">Welcome to AllGeo Solutions, a leading and dynamic organization dedicated to providing comprehensive solutions in the fields of Geology, Hydrogeology, Geophysical survey, Groundwater Explorations, and Environmental Services across the country.At AllGeo Solutions, we pride ourselves on our team of highly skilled and passionate professionals who possess extensive expertise in their respective domains. With a collective commitment to excellence and sustainability, we strive to meet the diverse needs of our clients, ranging from government agencies and private enterprises to non-profit organizations.Geology forms the foundation of our work, as we delve into the Earth&apos;s composition and geological processes to gain valuable insights into various projects. Our team of geologists excels in conducting in-depth surveys and assessments, identifying potential geological hazards, and providing informed guidance for successful project execution. Hydrogeology is another core pillar of our organization, as we focus on studying the distribution and movement of groundwater.</div>
                        <div className="ha-cols"><img src={home_demo} alt="demo" /></div>
                    </div>
                </div>
                <div className='page-body' id="h-services">
                    <h3>Our Services</h3>
                    <div id='about-services'>
                        <Detail className='open' name='services-details'>
                            <span>Geospatial</span>
                            <p>Discover the world with our cutting-edge Geospatial Services. We specialize in leveraging advanced technologies to provide accurate and insightful geospatial solutions tailored to your business needs. From geographic data analysis to satellite imagery interpretation, our team delivers precise mapping, spatial modeling, and location-based insights to drive informed decision-making. Whether you&apos;re in urban planning, agriculture, logistics, or environmental management, our comprehensive suite of services empowers you to unlock the full potential of geospatial data. Trust us to navigate your journey towards spatial intelligence and gain a competitive edge in today&apos;s dynamic landscape.</p>
                        </Detail>
                        <Detail name='services-details'>
                            <span>Geological</span>
                            <p>Explore the depths of the Earth with our premier Geological Services. We specialize in providing comprehensive solutions for understanding the complex geological formations that underpin your projects. From subsurface mapping to geological surveys, our team employs state-of-the-art technologies and expertise to deliver accurate analysis and actionable insights. Whether you&apos;re in mining, oil and gas exploration, civil engineering, or environmental remediation, our services enable you to mitigate risks, optimize resource utilization, and make informed decisions. Partner with us to uncover the geological secrets beneath your feet and pave the way for sustainable success in your endeavors.</p>
                        </Detail>
                        <Detail name='services-details'>
                            <span>Hydrogeological</span>
                            <p>Dive into the depths of groundwater exploration and management with our comprehensive Hydrogeological Services. Specializing in the intricate science of subsurface water systems, we offer tailored solutions to meet your diverse needs. From aquifer mapping and groundwater modeling to contamination assessment and remediation, our expert team utilizes advanced technologies and proven methodologies to deliver accurate insights and sustainable solutions. Whether you&apos;re in water resource management, environmental consulting, or infrastructure development, our services enable you to make informed decisions, mitigate risks, and ensure  the responsible utilization of water resources. Partner with us to navigate the complexities of hydrogeology and safeguard the future of water sustainability.</p>
                        </Detail>
                        <Detail name='services-details'>
                            <span>Environmental Services</span>
                            <p>Explore a greener future with our comprehensive Environmental Services. We specialize in delivering innovative solutions to address diverse environmental challenges. From ecological assessments and habitat restoration to pollution control and sustainability planning, our expert team employs cutting-edge technologies and best practices to safeguard the environment and promote sustainable development. Whether you&apos;re in manufacturing, construction, energy, or public sector, our services help you navigate regulatory compliance, minimize environmental footprint, and enhance corporate stewardship. Partner with us to embark on a journey towards environmental excellence, where responsible practices and conservation efforts pave the way for a healthier planet and thriving communities.</p>
                        </Detail>
                        <Detail name='services-details'>
                            <span>Geophysical</span>
                            <p>Unlock the mysteries of the Earth&apos;s subsurface with our premier Geophysical Services. Specializing in cutting-edge techniques and technologies, we provide comprehensive solutions tailored to your exploration and development needs. From Resistivity surveys to electromagnetic mapping and Geophysical Logging , our expert team delivers precise data and actionable insights to enhance your understanding of subsurface structures and resource potential. Whether you&apos;re in Groundwater , mining, renewable energy, or infrastructure development, our geophysical services empower you to make informed decisions, mitigate risks, and optimize operations. Partner with us to harness the power of geophysics and uncover hidden opportunities beneath the surface.</p>
                        </Detail>
                    </div>
                </div>
                <div className='page-body' id="h-product">
                    <h3>Our Products</h3>
                    <div className="prod-img">
                        <img src={home1} alt=''>
                        </img>
                        <img src={home2} alt=''>
                        </img>
                    </div>
                    <div className="prod-img">
                        <img src={home3} alt=''>
                        </img>
                        <img src={home4} alt=''>
                        </img>
                    </div>
                </div>
                <Contact_form />
            </Body_Container>
        </>
    )
}

export default Home