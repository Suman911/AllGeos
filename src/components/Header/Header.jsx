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
                    <div id="nav-bar">
                        <div id="menu-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" fill='#fff'>
                                <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
                            </svg>
                        </div>
                        <div id="nav-links">
                            <span className="items"><NavLink className={(link) => `${link.isActive ? "active" : ""} links`} to="/">HOME</NavLink></span>
                            <span className="items"><NavLink className={(link) => `${link.isActive ? "active" : ""} links`} to="/about">ABOUT US</NavLink></span>
                            <span id="services" className="items"><button className='links' onClick={() => false}>SERVICES
                                <svg id='arrow' viewBox=" 0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"></path></svg>
                                <ul>
                                    <NavLink className={(link) => link.isActive ? "active" : ""} to="/geophysical"><li className='sub-items'>Geophysical</li></NavLink>
                                    <NavLink className={(link) => link.isActive ? "active" : ""} to="/geological"><li className='sub-items'>Geological</li></NavLink>
                                    <NavLink className={(link) => link.isActive ? "active" : ""} to="/geospatial"><li className='sub-items'>Geospatial</li></NavLink>
                                    <NavLink className={(link) => link.isActive ? "active" : ""} to="/envionmental"><li className='sub-items'>Envionmental</li></NavLink>
                                    <NavLink className={(link) => link.isActive ? "active" : ""} to="/hydrogeological"><li className='sub-items'>Hydrogeological</li></NavLink>
                                </ul>
                            </button>
                            </span>
                            <span className="items"><NavLink className={(link) => `${link.isActive ? "active" : ""} links`} to="/products">PRODUCTS</NavLink></span>
                            <span className="items"><NavLink className={(link) => `${link.isActive ? "active" : ""} links`} to="/blogs">BLOGS</NavLink></span>
                            <span className="items"><NavLink className={(link) => `${link.isActive ? "active" : ""} links`} to="/contact">CONTACT US</NavLink></span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header