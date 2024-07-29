import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FormTextarea = forwardRef(function TextareaCreate(
    { label = '', id = "", className = "", required = false, ...props }, ref) {
    return (
        <>
            <label htmlFor={id}> {label} {required && <span style={{ "color": "red" }}>*</span>}
                <textarea
                    name={id}
                    id={id}
                    className={className}
                    {...props}
                    required={required}
                    ref={ref[0]}
                >
                </textarea>
                <div className="err-msg" ref={ref[1]}></div>
            </label>
        </>
    )
})

FormTextarea.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool
}


export default FormTextarea;