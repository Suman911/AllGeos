import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';
import Detail from '../../utill/Detail.jsx';
import { geophysical, geophysical1, geophysical2, geophysical3 } from "../../utill/images";

export default function Geophysical() {
  return (
    <>
      <Top_container bg_image={geophysical}>
        <div>
          <div id="title" className='bg-w-t'>
            <h1>Geophysical Services</h1>
            <h3 className='h3-spred'>WELCOME TO OUR SPACE</h3>
          </div>
        </div>
      </Top_container>
      <Body_Container id="prduct-body">
        <div className='page-body' id="h-services">
          <h3>Geophysical Services</h3>
          <div className='maxW-800px'>
            We offer comprehensive geophysical services including resistivity surveys, geophysical borehole logging, and Transient Electromagnetics surveys (TEM). Our advanced resistivity surveys provide detailed data for geological mapping and groundwater detection. Geophysical borehole logging delivers insights into subsurface conditions, vital for geological and hydrogeological studies. TEM surveys accurately map subsurface conductivity variations, aiding mineral exploration and environmental assessments. With cutting-edge technology and experienced professionals, we provide precise and efficient solutions tailored to your project&apos;s needs. Trust AllGeo Solutions for superior geophysical expertise, ensuring success in your exploration and development endeavors.
          </div>
          <div>
            <Detail className='open' name='Geophysical'>
              <span>Electrical Resistivity Tomography (ERT) Survey</span>
              <p>
                Delve into the subsurface with our ERT surveys. By measuring variations in electrical resistivity, we can map geological features, groundwater resources, and potential hazards with unparalleled precision. Our ERT surveys empower you to make informed decisions for your projects, whether in Groundwater Exploration, management, mineral exploration, or Engineering geology Projects.
              </p>
              <div className='w-80'>
                <img src={geophysical1} alt="" />
              </div>
            </Detail>
            <Detail name='Geophysical'>
              <span>Time Domain Electromagnetic (TEM) Survey:</span>
              <p>
                Explore the depths of the Earth with our TEM surveys. By measuring electromagnetic responses, we can map subsurface conductivity variations, aiding in the delineation of groundwater resources, mineral deposits, and geological structures. Our TEM surveys provide invaluable data for resource exploration, environmental monitoring, and geotechnical investigations. Also, we are only company in the country which is providing the survey capacity in the Time Domain Electromagnetics.
              </p>
              <div className='w-80'>
                <img src={geophysical2} alt="" />
              </div>
            </Detail>
            <Detail name='Geophysical'>
              <span>Geophysical Borehole Logging</span>
              <p>
                Gain a deeper understanding of the subsurface with our geophysical borehole logging services. By deploying downhole instruments, we collect data on lithology, Resistivity Natural Gamma, enhancing geological interpretations and optimizing drilling programs. Our borehole logging services are essential for groundwater assessment, Tubewell construction and Miner Exploration.
                <br /><br />
                At AllGeo Solutions, we are committed to delivering exceptional geophysical services that drive success for our clients. Whether you&apos;re exploring for resources, assessing environmental risks, or planning infrastructure projects, our team of experts is here to provide the insights you need to make informed decisions and achieve your goals.
              </p>
              <div className='w-80'>
                <img src={geophysical3} alt="" />
              </div>
            </Detail>
          </div>
        </div>
      </Body_Container>
    </>
  )
}
