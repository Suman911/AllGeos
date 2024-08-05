import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';
import Detail from '../../utill/Detail.jsx';
import { geospatial } from "../../utill/images";

export default function Geospatial() {
  return (
    <>
      <Top_container bg_image={geospatial}>
        <div>
          <div id="title" className='bg-w-t'>
            <h1>Geospatial Services</h1>
            <h3 className='h3-spred'>WELCOME TO OUR SPACE</h3>
          </div>
        </div>
      </Top_container>
      <Body_Container id="prduct-body">
        <div className='page-body' id="h-services">
          <h3>Geospatial Services</h3>
          <div className='maxW-800px'>
            We offer precision and innovation in digital image processing of satellite data products. They provide tailored GIS development for municipal applications, digital photogrammetric services, and robust database design. They offer comprehensive solutions for street addressing systems, infrastructural development, base map preparation, and property tax information systems. They also produce GIS maps for urban local bodies, providing essential datasets for government entities.
          </div>
          <div>
            <Detail className='open' name='Geospatial'>
              <span>Digital Image Processing of Various Satellite Data Products</span>
              <p>
                Our advanced digital image processing techniques guarantee precise and timely analysis of satellite data, offering valuable insights for various applications like environmental monitoring and resource management.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>GIS Development for Municipal Application</span>
              <p>
                GIS solutions streamline sustainable urban planning and governance, enhancing decision-making processes and optimizing resource allocation for smarter, more sustainable cities.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Digital Photogrammetric Services</span>
              <p>
                Photogrammetric technology is utilized in topographic mapping to accurately depict terrain, providing a comprehensive and accurate mapping solution for various project requirements.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Database Design and Construction</span>
              <p>
                Database design and construction are crucial for creating scalable solutions for managing large datasets and establishing reliable repositories within a database, ensuring robust and efficient data management.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Street Addressing System</span>
              <p>
                Public services utilize systematic addressing systems for efficient urban planning and emergency response, ensuring accurate and standardized navigation.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Infrastructural Development</span>
              <p>
                The seamless integration of digital elements is crucial in urban environments, enhancing their sustainability and resilience, thereby enhancing the overall quality of life.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Base Map Preparation / Updation</span>
              <p>
                Reliable preparation and updating services are essential for planning processes, ensuring accurate and current maps for informed decision-making and application.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Property Tax Information System</span>
              <p>
                The streamlined approach to property tax and property assessment has significantly improved the efficiency and effectiveness of property management.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Production of Different GIS Maps for Urban Local Bodies</span>
              <p>
                We specialize in providing tailored GIS maps for infrastructure development, ensuring they are tailored to the unique needs of urban local bodies, providing valuable insights for effective planning and resource optimization.
              </p>
            </Detail>
            <Detail name='Geospatial'>
              <span>Datasets for Various Government Bodies</span>
              <p>
                Specialized datasets are produced for government entities, including environmental agencies, to ensure accurate and up-to-date information for evidence-based decision-making within the government.
              </p>
            </Detail>
          </div>
        </div>
      </Body_Container>
    </>
  )
}
