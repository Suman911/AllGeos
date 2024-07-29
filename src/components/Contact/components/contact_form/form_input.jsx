import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FormInput = forwardRef(function InputCreate(
    { label = '', id = "", className = "", type = '', required = false, ...props }, ref) {
    if (type !== 'submit') {
        return (
            <>
                <label htmlFor={id}> {label} {required && <span style={{ "color": "red" }}>*</span>}
                    <input
                        type={type}
                        name={id}
                        id={id}
                        className={className}
                        {...props}
                        required={required}
                        ref={ref[0]}
                    />
                    <div className="err-msg" ref={ref[1]}></div>
                </label>
            </>
        )
    }
    else {
        return (
            <>
                <label htmlFor={id}> {label}
                    <input
                        type={type}
                        id={id}
                        className={className+ " btn"}
                        {...props}
                        ref={ref}
                    />
                </label>
            </>
        )
    }
})

FormInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool

}


export default FormInput;
