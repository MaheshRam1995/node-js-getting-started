const Interests = (props) => {
    
    /**
     * onClick method updates user selected hobbie details
     * @param {*} event 
     * @param {*} target 
     */
    const onClick = (event, target) => {
        let dataArray = [...props.allValues.hobbiesList];
        dataArray[event.target.value].selected = !dataArray[event.target.value].selected;
        props.setAllValues(dataArray, target);
    }

    return (
        <>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <div class="login inboxStyle">
                            <div class="button_align">
                                <h1>SELECT HOBBIES</h1>
                            </div>
                            <div class="button_align">
                            {props.allValues.initial_hobby === 0 ? <></> : <h4 className="required">Please select your hobby</h4>}
                            </div>
                            <ul style={{ maxWidth: '350px' }}>
                                {props.allValues.hobbiesList.map(element => {
                                    return <li value={element.key} onClick={(event) => onClick(event, 'hobbiesList')} className={element.selected ? "checked" : ""}>{element.value}</li>
                                })}
                            </ul>
                            <div class="button_align">
                                <button class="button login__submit" onClick={() => props.previousStep()}>
                                    <span class="button__text">PREVIOUS</span>
                                </button>
                                <button class="button login__submit" onClick={() => props.nextStep()}>
                                    <span class="button__text">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Interests;