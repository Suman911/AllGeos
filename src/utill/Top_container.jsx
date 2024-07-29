import PropTypes from 'prop-types';
import './top_container.css'

function Top_container({ children, bg_image = "", bg_color="none" }) {
    const style ={
        backgroundColor: bg_color,
        backgroundImage: `url(${bg_image})`
    }

    return (
        <section className="top-conatiner" style={style}>
            {children}
        </section>
    )
}

Top_container.propTypes = {
    children: PropTypes.node,
    bg_image: PropTypes.any,
    bg_color: PropTypes.string
}

export default Top_container;