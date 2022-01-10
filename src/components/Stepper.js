const Stepper = (props) => {

    return (<>

        <div class="container_stepper">
            <div class="screen_stepper">
                <div class="screen__content_stepper">
                    <ul class="breadcrumb" style={{ display: 'flex' }}>
                        <li style={{ background: 'brown' }} className="stepListStyle">1</li>
                        <li style={{ display: 'flex' }}>
                            <div style={{ width: '80px', marginTop: '10px', background: props.step > 1 ? 'blue' : 'yellow', height: '5px', borderRadius: '3px' }}></div>
                            <div className="stepListStyle" style={{ background: props.step > 1 ? 'brown' : 'grey' }}>2</div>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <div style={{ width: '80px', marginTop: '10px', background: props.step > 2 ? 'blue' : 'yellow', height: '5px', borderRadius: '3px' }}></div>
                            <div className="stepListStyle" style={{ background: props.step > 2 ? 'brown' : 'grey' }}>3</div>                                    </li>
                        <li style={{ display: 'flex' }}>
                            <div style={{ width: '80px', marginTop: '10px', background: props.step > 3 ? 'blue' : 'yellow', height: '5px', borderRadius: '3px' }}></div>
                            <div className="stepListStyle" style={{ background: props.step > 3 ? 'brown' : 'grey' }} >4</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>)
}

export default Stepper;