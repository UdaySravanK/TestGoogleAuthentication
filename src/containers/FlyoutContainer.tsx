import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import GoogleAuthenticationContainer from "./GoogleAuthenticationContainer";

type Props = {
    title: string;
}

const FlyoutContainer: React.FC<Props> = ({ title }) => {

    const [ isPaneOpen, setIsPaneOpen ] = useState(false);

    const handleOnClickOpenLoginFlyout = () => {
        setIsPaneOpen(true);
    };

    const handleOnClickCloseLoginFlyout = () => {
        setIsPaneOpen(false);
    };

    const handleAuthenticationSuccess = () => {

    };

    const handleAuthenticationFail = () => {

    };

    return (
        <div>
            <GoogleAuthenticationContainer onFailure={handleAuthenticationFail} onSuccess={handleAuthenticationSuccess}/>
            <div><button style={{ width: 150, height: 42, margin: 20 }} onClick={handleOnClickOpenLoginFlyout}>Open login flyout</button></div>
            <SlidingPane
                isOpen={isPaneOpen}
                title={title}
                from='right'
                width='400px'
                onRequestClose={handleOnClickCloseLoginFlyout}>
                <div>

                </div>
            </SlidingPane>

        </div>
    )
};

export default FlyoutContainer;
