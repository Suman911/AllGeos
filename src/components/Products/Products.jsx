import './products.css';
import Body_Container from '../../utill/Body_Container.jsx';
import Top_container from '../../utill/Top_container.jsx';
import { products_top } from '../../utill/images.jsx'

function Products() {

    return (
        <>
            <Top_container bg_image={products_top}>
                <div>
                    <div id="title" className='bg-w-t'>
                        <h3 className='h3-spred'>WELCOME TO OUR SPACE</h3>
                        <h1>Here We Are</h1>
                        <div className='base'>All Geo Solutions: Unleashing Ideas, Inspiring Innovation, Driving Implementation.</div>
                    </div>
                </div>
            </Top_container>
            <Body_Container>
                
            </Body_Container>
        </>
    )
}

export default Products