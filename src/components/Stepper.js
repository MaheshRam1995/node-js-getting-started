const Stepper = (props) => {

    return (<>

        <div class="container_stepper">
            <div class="screen_stepper">
                <div class="screen__content_stepper">
                    <ul class="breadcrumb" style={{ display: 'flex' }}>
                        <li style={{ background: 'mediumslateblue' }} className="stepListStyle">1</li>
                        <li style={{ display: 'flex' }}>
                            <div style={{ width: '80px', marginTop: '10px', background: props.step > 1 ? 'cadetblue' : 'white', height: '5px' }}></div>
                            <div className="stepListStyle" style={{ background: props.step > 1 ? 'mediumslateblue' : 'grey' }}>2</div>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <div style={{ width: '80px', marginTop: '10px', background: props.step > 2 ? 'cadetblue' : 'white', height: '5px' }}></div>
                            <div className="stepListStyle" style={{ background: props.step > 2 ? 'mediumslateblue' : 'grey' }}>3</div>                                    </li>
                        <li style={{ display: 'flex' }}>
                            <div style={{ width: '80px', marginTop: '10px', background: props.step > 3 ? 'cadetblue' : 'white', height: '5px' }}></div>
                            <div className="stepListStyle" style={{ background: props.step > 3 ? 'mediumslateblue' : 'grey' }} >4</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>)
}

export default Stepper;