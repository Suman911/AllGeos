import './contact_form.css';
import FormInput from './form_input';
import FormTextarea from './form_texarea'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import To_top from '../../../../utill/To_top';

function Contact_form() {
    const { scrollToTop } = To_top()

    const Nameref = useRef(null);
    const Emailref = useRef(null);
    const Phoneref = useRef(null);
    const Messageref = useRef(null);

    const Name_err = useRef(null);
    const Email_err = useRef(null);
    const Phone_err = useRef(null);
    const Message_err = useRef(null);

    const FocusInput = (ref) => {
        return () => {
            ref[0].current.style.borderColor = "#5c6680";
            ref[1].current.innerHTML = '';
            ref[1].current.style.opacity = 0;
        }
    }

    const SetErr = (ref, msg) => {
        ref[0].current.style.borderColor = "red";
        ref[1].current.innerHTML = msg;
        ref[1].current.style.opacity = 1;
        return false;
    }

    const validateName = () => {
        if (Nameref.current.value) {
            const Name = Nameref.current.value = Nameref.current.value.trim().replace(/\s+/g, ' ');
            const nameREGX = /^[a-zA-Z]{2,30}(?:\s[a-zA-z]{2,30})?(?:\s[a-zA-Z]{2,30})?$/;

            if (!(nameREGX.test(Name))) {
                if (Name.replace(/ /g, '').length > 60) {
                    return SetErr([Nameref, Name_err], 'Name must be with in 60 character');
                }
                return SetErr([Nameref, Name_err], 'Please enter a valid Name, First-Name Middle-Name Last-Name');
            }

            return Name;
        }
        return false;
    }

    const validateEmail = () => {
        if (Emailref.current.value) {
            const Email = Emailref.current.value = Emailref.current.value.trim()
            const emailREGX = /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9]).[a-z0-9]{2,10}(?:.[a-z]{2,10})?$/;

            if (!(emailREGX.test(Email))) {
                return SetErr([Emailref, Email_err], 'Please enter a valid Email Address');
            }

            return Email;
        }
        return false;
    }

    const validatePhone = () => {
        if (Phoneref.current.value) {
            const Phone = Phoneref.current.value = Phoneref.current.value.replace(/\s/g, '');
            const phoneREGX = /^(?:(?:\+?91[\s-]?)|[^a-zA-Z\d+-\s])?[1-9]\d{9,10}$/

            if (!(phoneREGX.test(Phone))) {
                return SetErr([Phoneref, Phone_err], 'Phone Number invalid, must &#43;91-99999 99999');
            }

            return Phone;
        }
        return false;
    }

    const validateMessage = () => {
        if (Messageref.current.value) {
            const Message = Messageref.current.value = Messageref.current.value.trim();

            if (Message.split(' ').length > 500) {
                return SetErr([Messageref, Message_err], 'Message should be less than 500 words');
            }
            else if (Message.split(' ').length < 50) {
                return SetErr([Messageref, Message_err], 'Message should be more than 50 words');
            }

            return Message;
        }
        return false;
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        const form_data = {
            Name: validateName(),
            Email: validateEmail(),
            Phone: validatePhone(),
            Message: validateMessage()
        }
        if (
            form_data.Name &&
            form_data.Email &&
            form_data.Phone &&
            form_data.Message
        ) {
            console.log(form_data);
        }
    }

    return (
        <>
            <section id="contact">
                <h3>Contact Us</h3>
                <div id="contact-container">
                    <div className="contact-col">
                        <h4 className="">Get In Touch</h4>
                        <div id="contact-col-1">
                            <div>
                                <form id="Contact-form" onSubmit={HandleSubmit}>
                                    <FormInput label="Name" type="text" id='name' placeholder="Name" autoComplete='on' ref={[Nameref, Name_err]} required={true} onBlur={validateName} onFocus={FocusInput([Nameref, Name_err])} />
                                    <FormInput label="Email" type="email" id='email' placeholder="Email" autoComplete='on' ref={[Emailref, Email_err]} required={true} onBlur={validateEmail} onFocus={FocusInput([Emailref, Email_err])} />
                                    <FormInput label="Contact Number" type="tel" id='phone-number' placeholder="Contact Number" autoComplete='on' ref={[Phoneref, Phone_err]} required={true} onBlur={validatePhone} onFocus={FocusInput([Phoneref, Phone_err])} />
                                    <FormTextarea label="Message" rows="6" id='message' placeholder="Message" ref={[Messageref, Message_err]} required={true} onBlur={validateMessage} onFocus={FocusInput([Messageref, Message_err])} />
                                    <FormInput id='submit' type="submit" value='Send' />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-col">
                        <h4 className="">Contact Address</h4>
                        <div id="contact-col-2">
                            <div>
                                If you face any type of problem , reach out our support team from anywhere
                            </div>
                            <div>
                                <div className="contact-info">
                                    <svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.655 477.655"><path d="M440.367,440.415l-10.173-29.91c-19.102-56.262-70.83-94.605-129.763-97.121c-5.187,4.03-10.655,7.493-16.322,10.521 c-8.449,22.185-36.836,28.195-53.468,11.205c-19.676-1.738-37.69-9.511-53.422-21.725c-58.933,2.508-110.647,40.851-129.763,97.121 L37.3,440.415c-2.936,8.603-1.522,18.084,3.774,25.469c5.279,7.391,13.821,11.771,22.906,11.771h349.693 c9.083,0,17.626-4.379,22.906-11.771C441.873,458.499,443.286,449.018,440.367,440.415z"></path> <path d="M277.758,290.619c34.212-24.047,58.141-77.151,58.141-128.491c0-145.907-194.133-145.752-194.133,0 c0,62.397,35.33,127.303,81.546,139.556c4.456-12.626,16.382-21.757,30.515-21.757C263.331,279.926,271.81,284.095,277.758,290.619 z"></path> <path d="M99.169,223.042c4.813,18.906,31.044,13.704,31.044-3.805c0-70.178,3.354-76.731-6.041-84.348 C145.679,2.361,330.946,3.355,353.495,134.904c-9.381,7.641-6.025,14.163-6.025,84.333c0,5.489,2.95,10.095,7.189,12.952 c0,54.594-22.145,51.402-88.736,69.052c-10.295-11.174-28.683-3.899-28.683,11.173c0,18.876,27.053,23.293,32.302,4.318 c53.762-14.256,101.018-18.752,101.018-72.484v-11.027c3.991-2.066,6.817-5.729,7.951-10.179c51.822-1.056,51.838-78.719,0-79.775 c-1.072-4.24-3.711-7.703-7.423-9.815c1.336-15.902-1.94-36.805-11.057-56.985C296.626-54.368,109.355-3.176,106.422,123.622 c-0.404,4.294-0.078,7.338,0.17,9.83c-3.712,2.112-6.351,5.575-7.423,9.815c-21.71,0.419-39.212,18.084-39.212,39.888 C59.957,204.958,77.459,222.622,99.169,223.042z"></path></svg>
                                    <span>&#43;91-94528 30062</span></div>
                                <div className="contact-info">
                                    <svg fill="#000000" width="64px" height="64px" viewBox="0.5 1.5 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-9.832.256L2.833 6.928v5.286zM3.824 6.665l3.743 2.76a1.684 1.684 0 0 0 1.844 0l3.743-2.76zm9.03 5.674-3.26-2.091a2.545 2.545 0 0 1-2.21 0l-3.263 2.091zm1.291-5.41L10.31 9.756l3.835 2.46z"></path></svg>
                                    <span>contact@allgeos.co.in</span></div>
                                <div className="contact-info">
                                    <Link onClick={scrollToTop} to="/"><svg width="64px" height="64px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M50 0C22.404 0 0 22.404 0 50s22.404 50 50 50c27.546 0 49.911-22.324 49.992-49.852A1.5 1.5 0 0 0 100 50a1.5 1.5 0 0 0-.006-.133C99.922 22.332 77.552 0 50 0zm0 3c1.691 0 3.36.094 5.006.268c.012.216-.403.365-1.662.316c-.65.568-.51.663-3.06.748c-.512 2.226-6.463.95-2.577-.195c5.646-1.313-1.81-1.361-3.086.836c3.622 1.557-2.894.275-4.076 1.41c-.718-.738-2.302-1.343-4.041-1.41A47.043 47.043 0 0 1 50 3zm35.918 16.684a47.11 47.11 0 0 1 3.693 5.02c.047.37.06.737.014 1.1c.643 1.938-.589.09-.621-.156c-1.598-1.654-2.205-3.824-3.086-5.964zm-71.022.195c.923-.13-4.042 3.988-2.019 3.557c1.943-4.41 2.906.808.043 1.128c-2.36 5.827 3.048-3 3.096.168c-1.445 3.089.204 5.041 2.986 3.608c2.667-1.062.531 1.706 2.066 1.66c2.08-2.86 1.396.138-.318 2.246c-2.708 1.228-5.278-.845-7.086-2.416c-1.98 4.073-3.561-1.666-2.232-3.25c1.786-.53.072-1.64-.637-2.512c.289-.435.588-.863.89-1.289c.314-.233.416-.414.407-.57c.374-.51.762-1.01 1.156-1.504c.918-.538 1.445-.797 1.648-.826zm9.573.016c-.111 1.61 4.47 1.093 4.19 3.966c-1.547 1.125-2.762-.75-4.19-.902c-4.311 1.492-2.674-1.897 0-3.064zm12.511.318c.368.013.625.194.663.592c-3.49 1.029-.326 5.273-.604 7.99c-2.473.883-5.567-1.309-2.295-3.29c-3.035-2.255.642-5.349 2.236-5.292zm47.916 3.756c1.492-.163 3.137 2.357 4.565 4.967c-.66-4.608 3.917 6.289 2.037.04c.098-.211.164-.431.207-.656A46.814 46.814 0 0 1 97 50c0 2.083-.15 4.13-.412 6.14c-.573.086-.602 5.342-1.565 4.006c-.831.706 2.178-5.569-.023-1.667c-3.457 3.59-1.534-2.611-.236-4.34c.955.52 1.782-.545 1.238-3.045c-.39-4.06-2.266-5.343-3.22-8.973c-1.586.775.945 6.07.05 8.492c-.73 3.16-2.193 10.666-5.156 10.133c-1.616-3.738.35 3.44-.467 4.783c.629.931 5.338 1.914 4.707-2.078c1.754-4.913.76-.62.617 2.113c2.378 1.84-4 4.404-1.781 2.598c-1.646-.646-3.002 1.185-4.408.996c-1.215 1.059-1.312-.872-.78-1.506c3.713-1.714-1.701-1.102-.814-2.88c.46-3.884-2.632-6.476-4.14-8.983c-.682-4.835 3.945-1.281 3.738.613c4.96-2.219 2.975-8.763-.037-11.715c2.048-4.261.852.508 2.4 1.122c.373-2.768 1.263-4.254 3.117-6.633c1.21-4.277-.366-8.643-3.41-11.694c1.65-2.181-3.55-2.897-1.818-3.445c.098-.035.197-.057.296-.068zm-53.11 12.578c-.436 2.615 5.584 3.355 3.413 4.976c-.577.208-1.19.445-1.818.291c.326-1.434-4.56-5.328-1.596-5.267zm-12.518.71c.403-.084 1.017.826.834 2.417c.7 4.01 2.138 7.595 2.763 11.414c.06 1.74-.768.18-1.033-.318c-2.285-3.115-1.866-7.444-2.645-11.358c-.417-1.42-.233-2.088.08-2.154zm18.191 4.075c2.622 1.318 8.288-.426 10.99 2.201c1.79-2.023-.278 3.168 2.756 3.455c3.302-1.255 1.577 2.024 2.764 4.23c1.727 3.1 2.13 7.851 5.226 9.714c2.924-3.982 1.239 4.364 4.506 1.584c.671-3.372-2.634-5.873-1.63-9.53c1.872-2.192 4.772-4.269 6.35-7.039c2.602-2.68 4.988-.652 6.393 1.967c-.186 2.595 1.086 3.48 3.237 2.022c1.12 3.42-.183 7.9 2.976 10.423c2.551 5.877-3.316-2.44-4.418 1.123c2.405 2.28 1.75 4.536 3.407 6.907c1.576-.274 3.246 3.004 5.625 2.873c2.156-.719 5.22-.606 7.213-1.953a46.893 46.893 0 0 1-4.723 8.168c-1.472 1.331-2.631 2.899-3.713 4.529C75.839 91.228 63.602 97 50 97a46.797 46.797 0 0 1-29.03-10.04c-.325-1.8.99-1.489.327-3.081c-3.26-3.189 4.06-2.596 1.394-6.322c-.972-2.487-2.518-5.522-1.777-8.057c1.575-2.502 4.366-3.735 6.51-5.871c1.384-2.648 4.12-5.131 3.574-8.127c-1.866-.304-2.913.306-5.057.387c-5.283-1.244 1.94-2.036 3.375-3.143c3.342-.957 7.2-2.147 9.307-5.017c3.103-1.916 1.282-4.897-1.164-6.397zm56.297 8.592c.506.235.95 3.753-.078 5.185c-1.057 1.766-1.602-2.46-.518-2.968c.123-1.754.366-2.324.596-2.217zm1.062 11.947c.098-.018.229.188.424.733c.022-.032.037-.04.059-.07a46.707 46.707 0 0 1-1.133 3.581c-.617.457-1.187.681-.941-.607c1.398.739 1.168-3.557 1.591-3.637zM29.725 78.877c-.374.045-.79.383-1.227 1.121c-3.932.358-2.385 4.9-.662 7.068c1.27 1.78 3.418 1.027 3.035-1.242c1.333-1.853.474-7.141-1.146-6.947z" ></path></svg>
                                        <span>www.allgeos.co.in</span></Link></div>
                                <div className="contact-info">
                                    <svg width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"></path><path d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"></path></svg>
                                    <span>AllGeo Solutions PNP- 03,Software Technology Park of India MNNIT Campus, Prayagraj: 211004,INDIA</span></div>
                            </div>
                            <div id="socials">
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z"></path>
                                    </svg>
                                </Link>
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                                    </svg>
                                </Link>
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                        <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                                    </svg>
                                </Link>
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.084,3.163,9.426,7.627,11.174c-0.105-0.949-0.2-2.406,0.042-3.442 c0.218-0.936,1.407-5.965,1.407-5.965s-0.359-0.719-0.359-1.781c0-1.669,0.967-2.914,2.171-2.914c1.024,0,1.518,0.769,1.518,1.69 c0,1.03-0.655,2.569-0.994,3.995c-0.283,1.195,0.599,2.169,1.777,2.169c2.133,0,3.772-2.249,3.772-5.495 c0-2.873-2.064-4.882-5.012-4.882c-3.414,0-5.418,2.561-5.418,5.208c0,1.031,0.397,2.137,0.893,2.739 c0.098,0.119,0.112,0.223,0.083,0.344c-0.091,0.379-0.293,1.194-0.333,1.361c-0.052,0.22-0.174,0.266-0.401,0.16 c-1.499-0.698-2.436-2.889-2.436-4.649c0-3.785,2.75-7.262,7.929-7.262c4.163,0,7.398,2.966,7.398,6.931 c0,4.136-2.608,7.464-6.227,7.464c-1.216,0-2.359-0.632-2.75-1.378c0,0-0.602,2.291-0.748,2.853 c-0.271,1.042-1.002,2.349-1.492,3.146C12.57,26.812,13.763,27,15,27c6.627,0,12-5.373,12-12S21.627,3,15,3z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact_form;