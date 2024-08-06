import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';
import Detail from '../../utill/Detail.jsx';


export default function Envionmental() {
  return (
    <>
      <Top_container bg_image={""}>
        <div>
          <div id="title" className='bg-w-t'>
            <h1>Environ&shy;mental Insights</h1>
            <h3 className='h3-spred'>WELCOME TO OUR SPACE</h3>
          </div>
        </div>
      </Top_container>
      <Body_Container id="prduct-body">
        <div className='page-body' id="h-services">
          <h3>Environmental Insights</h3>
          <div className='maxW-800px'>At AllGeo Solutions, we are committed to safeguarding our planet&apos;s natural resources and promoting sustainable practices through our comprehensive range of environmental services. With a team of dedicated experts and cutting-edge technology, we offer tailored solutions to address the most pressing environmental challenges of our time.</div>
          <div>
            <Detail className='open' name='Environmental'>
              <span>Water Resource Management</span>
              <p>From water quality testing to watershed management, we offer a range of services to safeguard water resources, promote sustainable water use, and address issues such as pollution, scarcity, and flooding.</p>
            </Detail>
            <Detail name='Environmental'>
              <span>Waste Management and Recycling</span>
              <p>Our waste management solutions encompass waste audits, recycling programs, and landfill diversion strategies to minimize waste generation, maximize resource recovery, and reduce environmental impact.</p>
            </Detail>
            <Detail name='Environmental'>
              <span>Climate Change Adaptation and Mitigation</span>
              <p>We assist clients in developing climate change adaptation and mitigation strategies to enhance resilience, reduce greenhouse gas emissions, and transition to low-carbon and climate-resilient practices.</p>
            </Detail>
            <Detail name='Environmental'>
              <span>Environmental Compliance and Permitting</span>
              <p>We guide clients through regulatory compliance processes, helping them navigate complex environmental regulations, obtain permits, and implement best practices to meet environmental standards.</p>
            </Detail>
            <Detail name='Environmental'>
              <span>Drought and Flood Management</span>
              <p>Our expertise extends to drought and flood management, where we provide comprehensive solutions for mitigating the impacts of extreme weather events, enhancing water resource resilience, and implementing measures to prevent and mitigate droughts and floods.</p>
            </Detail>
          </div>
        </div>
      </Body_Container>
    </>
  )
}
