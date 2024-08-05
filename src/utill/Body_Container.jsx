import PropTypes from 'prop-types';
import './body_container.css'

function Body_Container({id="", children, bg_color = "none" }) {
    const style = {
        backgroundColor: bg_color
    }
    return (
        <section id={id} className="body-conatiner" style={style}>
            {children}
        </section>
    )
}

Body_Container.propTypes = {
    children: PropTypes.node,
    bg_color: PropTypes.string,
    id: PropTypes.string
}

export default Body_Container;