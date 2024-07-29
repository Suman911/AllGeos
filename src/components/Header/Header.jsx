import './header.css';
import { logo } from '../../utill/images';
import { Link, NavLink } from 'react-router-dom';

function Header() {

    return (
        <>
            <header>
                <div id="progressbar"></div>
                <nav id="head">
                    <div id="logo"><Link to="/"><img src={logo} alt="AGS_hor_blackn" /></Link></div>
                    <div id="nav-links">
                        <span className="items"><NavLink className={(link)=>`${link.isActive?"active":""} links`} to="/">HOME</NavLink></span>
                        <span className="items"><NavLink className={(link)=>`${link.isActive?"active":""} links`} to="/about">ABOUT US</NavLink></span>
                        <span id="services" className="items"><span className='links' onClick={()=>false}>SERVICES
                        <svg id='arrow' viewBox=" 0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"></path></svg>
                            <ul>
                                <NavLink className={(link)=>link.isActive?"active":""} to="/geophysical"><li className='sub-items'>Geophysical</li></NavLink>
                                <NavLink className={(link)=>link.isActive?"active":""} to="/geospatial"><li className='sub-items'>Geospatial</li></NavLink>
                                <NavLink className={(link)=>link.isActive?"active":""} to="/geosptical"><li className='sub-items'>Geosptical</li></NavLink>
                                <NavLink className={(link)=>link.isActive?"active":""} to="/envionmental"><li className='sub-items'>Envionmental</li></NavLink>
                                <NavLink className={(link)=>link.isActive?"active":""} to="/hydrogeological"><li className='sub-items'>Hydrogeological</li></NavLink>
                            </ul>
                        </span>
                        </span>
                        <span className="items"><NavLink className={(link)=>`${link.isActive?"active":""} links`} to="/products">PRODUCTS</NavLink></span>
                        <span className="items"><NavLink className={(link)=>`${link.isActive?"active":""} links`} to="/blogs">BLOGS</NavLink></span>
                        <span className="items"><NavLink className={(link)=>`${link.isActive?"active":""} links`} to="/contact">CONTACT US</NavLink></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header