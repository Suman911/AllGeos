import PropTypes from 'prop-types';
import './detail.css'

function Detail({ children, className="", name="" }) {

    const [summary, ...details] = children;

    function openContent({currentTarget}){

        const summaries = document.querySelectorAll(`.${name}`);
        summaries.forEach(other => {
            if (other !== currentTarget) {
                other.classList.remove('open');
            }
        });
        currentTarget.classList.toggle('open');
    }

    return (
        <>
            <div className="details">
                <div className={`summary ${name} ${className}`} onClick={openContent}>
                    <i></i>
                    {summary}
                </div>
                <div className="content">
                    {details}
                </div>
            </div>
        </>
    )
}

Detail.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string
}

export default Detail