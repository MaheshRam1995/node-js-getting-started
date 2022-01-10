import ScreenPanel from './ScreenPanel';

const UserDetails = (props) => {
    /**
     * onchange handles data provided by user
     * @param {.} event 
     * @param {*} target 
     */
    const onchange = (event, target) => {
        props.setAllValues(event.target.value, target);
    }

    return (
        <>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <div class="login">
                            <div class="button_align">
                                <h1>ENTER BASIC DETAILS</h1>
                            </div>
                            <div class="login__field">
                                <input className="login__input" type="text" value={props.allValues.name} required onChange={(event) => onchange(event, 'name')} placeholder="Name *" /><br />
                                {props.allValues.name || props.allValues.initial_name === 0 ? <></> : <label className="required">Please enter your name</label>}
                            </div>
                            <div class="login__field">
                                <input className="login__input" type="email" value={props.allValues.email} required onChange={(event) => onchange(event, 'email')} placeholder="Email ID *" /><br />
                                {props.allValues.email || props.allValues.initial_email === 0 ? <></> : <label className="required">Please enter your email</label>}
                            </div>
                            <div class="login__field">
                                <input className="login__input" type="number" value={props.allValues.number} required onChange={(event) => onchange(event, 'number')} placeholder="Contact No*" /><br />
                                {props.allValues.number || props.allValues.initial_number === 0 ? <></> : <label className="required">Please enter your number</label>}
                            </div>
                            <div class="button_align">
                                <button class="button login__submit" onClick={() => props.nextStep()}>
                                    <span class="button__text">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ScreenPanel />
                </div>
            </div>

        </>
    );
}

export default UserDetails;