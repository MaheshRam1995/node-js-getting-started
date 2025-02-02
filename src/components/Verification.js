import { useEffect } from "react";
import { useState, useRef } from "react/cjs/react.development";
import ScreenPanel from './ScreenPanel';

const Verification = (props) => {

    const [isError, setError] = useState(false);

    const [otpList, setOTPList] = useState([
        { key: 0, value: null, ref: useRef() },
        { key: 1, value: null, ref: useRef() },
        { key: 2, value: null, ref: useRef() },
        { key: 3, value: null , ref: useRef() }
    ]);

    useEffect(()=>{
        otpList[0].ref.current.focus();
    },[])

    /**
     * onChange handles OTP data received from user
     * @param {*} event 
     * @param {*} target 
     * @param {*} index 
     */
    const onChange = (event, target, index) => {
        setError(false);
        let dataArray = [...otpList];
        dataArray[index].value = event.target.value;
        setOTPList(dataArray, target);
        otpList[index + 1].ref.current.focus();
    }

    /**
     * nextStep navigate to final success page when valid OTP Details are entered
     */
    const nextStep = () => {
        let otpComplete = 0;
        otpList.forEach((value) => {
            if (value.value) {
                otpComplete = otpComplete + 1;
            }
        })
        if (otpComplete === 4) {
            setError(false);
            props.nextStep();
        } else {
            setError(true)
        }
    }


    return (
        <>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <div class="login">
                            <div class="button_align">
                                <h1>ENTER OTP</h1>
                                {isError ? <h4 className="required">Please enter OTP received in {props.allValues.number}</h4> : <h4>Please enter OTP received in {props.allValues.number}</h4>}
                            </div>
                            <div class="userInput">
                                {otpList.map((element, index) => {
                                    return <input className="otp_input" ref={element.ref} type="text" maxlength="1" value={element.value} onChange={(event) => onChange(event, 'otpList', index)} />
                                })}
                            </div>
                            <div class="button_align">
                                <button class="button login__submit" onClick={() => props.previousStep()}>
                                    <span class="button__text">PREVIOUS</span>
                                </button>
                                <button class="button login__submit" onClick={() => { nextStep() }}>
                                    <span class="button__text">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                  <ScreenPanel/>
                </div>
            </div>
        </>

    );
}

export default Verification;