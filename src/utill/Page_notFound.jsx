import Body_Container from './Body_Container.jsx';
import Top_container from './Top_container.jsx';

function Page_notFound() {

    return (
        <><Top_container>
            <div id='h-top' className='top'>
                <div id="title" className='bg-w-t'>
                    <h1>Welcome To AllGeo Solutions</h1>
                    <h3><em>&quot;Navigating Earth&apos;s Complexities, Delivering Solutions&quot;</em></h3>
                <div className='base'>Geospatial Services || Geological Services || Geophysical Services|| Hydrogeological Solutions || Environmental Services</div>
                </div>
            </div>
        </Top_container>
            <Body_Container>
                <h1 style={{ textAlign: 'center' }}>ERROR: 404 The Page Is Not Found</h1>
            </Body_Container>
        </>
    )
}

export default Page_notFound