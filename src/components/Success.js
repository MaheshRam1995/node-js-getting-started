import ScreenPanel from './ScreenPanel';
const Success = (props) => {
    return (
        <>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <h1>{props.step}</h1>
                            <div class="button_align">
                                <h1>SUCCESS</h1>
                                <h4>Application has been submitted successfully</h4>
                            </div>
                            <div class="button_align">
                                <button class="button login__submit" onClick={() => props.goToBeginning()}>
                                    <span class="button__text">HOME</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <ScreenPanel/>
                </div>
            </div>
        </>
    );
}

export default Success;