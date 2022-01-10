import { useState } from 'react';
import Success from './Success';
import Interests from './Interests';
import UserDetails from './UserDetails';
import Verification from './Verification';
import Stepper from './Stepper';

const MainForm = () => {

    /**
     * initial values of the state variable
     */
    const data = {
        initial_name: 0,
        initial_email: 0,
        initial_number: 0,
        initial_hobby: 0,
        name: '',
        email: '',
        number: '',
        hobbiesList: [
            { key: 0, value: 'Hit the gym', selected: false },
            { key: 1, value: 'Playing games', selected: false },
            { key: 2, value: 'Reading Novels', selected: false },
            { key: 3, value: 'Online Teaching', selected: false }
        ]
    }

    //State variables and methods
    const [step, setStep] = useState(1);
    const [allValues, setValues] = useState(data);


    /**
     * nextStep navigates to next step of the application 
     * if there is no error with input values 
     * and throws the neccessary message when there is error with the application
     */
    const nextStep = () => {
        let hobbieSelected = false;
        allValues.hobbiesList.forEach((value) => {
            if (value.selected) {
                hobbieSelected = true;
            }
        })

        if (allValues.name && allValues.email && allValues.number && step === 1) {

            setStep(step + 1);
            setValues({
                ...allValues, initial_hobby: 0
            })

        } else if (step === 2 && hobbieSelected) {

            setValues({
                ...allValues, initial_hobby: 0
            })
            setStep(step + 1);

        } else if (!hobbieSelected && step === 2) {

            setValues({
                ...allValues, initial_hobby: 1
            })

        } else if (step === 3) {

            setStep(step + 1);

        } else {

            let itemName;
            let itemEmail;
            let itemNumber;
            if (allValues.name === '') {
                itemName = 'initial_name';
            }
            if (allValues.email === '') {
                itemEmail = 'initial_email';
            }
            if (allValues.number === '') {
                itemNumber = 'initial_number';
            }
            setValues({
                ...allValues, [itemName]: 1, [itemEmail]: 1, [itemNumber]: 1
            })
        }

    }

    /**
     * previousStep navigates to previous step of the application
     */
    const previousStep = () => {
        setStep(step - 1);
    }

    /**
     * goToBeginning navigates to initial step of the application
     */
    const goToBeginning = () => {
        setStep(1);
        setValues(data);
    }

    /**
     * setAllValues maintains and updates value of each fields of the application
     * @param {*} value 
     * @param {*} target 
     */
    const setAllValues = (value, target) => {
        let item;
        if (target === 'name') {
            item = 'initial_name';
        } else if (target === 'email') {
            item = 'initial_email';
        } else if (target === 'number') {
            item = 'initial_number';
        }

        setValues({
            ...allValues, [target]: value, [item]: 1, initial_hobby: 0
        })
    }

    /**
     * based on the step the neccessary component with the appropriate fields will be displayed
     */
    switch (step) {
        case 1:
            return (<><Stepper step={step} /><UserDetails step={step} nextStep={nextStep} allValues={allValues} setAllValues={setAllValues} /></>);
        case 2:
            return (<><Stepper step={step} /><Interests step={step} previousStep={previousStep} nextStep={nextStep} allValues={allValues} setAllValues={setAllValues} /></>);
        case 3:
            return (<><Stepper step={step} /><Verification step={step} previousStep={previousStep} nextStep={nextStep} allValues={allValues} setAllValues={setAllValues} /></>);
        default:
            return (<><Stepper step={step} /><Success goToBeginning={goToBeginning} allValues={allValues} /></>);
    }
}

export default MainForm;