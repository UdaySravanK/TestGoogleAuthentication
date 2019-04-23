import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import GoogleAuthenticationContainer from "./GoogleAuthenticationContainer";

type Props = {
    title: string;
}

const FlyoutContainer: React.FC<Props> = ({ title }) => {

    const [ isPaneOpen, setIsPaneOpen ] = useState(false);
    const [ response, setLoginResponse ] = useState('');
    const [ error, setError ] = useState('');

    const handleOnClickOpenLoginFlyout = () => {
        setIsPaneOpen(true);
    };

    const handleOnClickCloseLoginFlyout = () => {
        setIsPaneOpen(false);
    };

    const handleAuthenticationSuccess = (res: any) => {
        setLoginResponse(res);
    };

    const handleAuthenticationFail = (error: any) => {
        setError(error);
    };

    return (
        <div>
            <div style={{ width: 350, height: 100, margin: '0 20 0 20' }}>
                <p>Response:</p>
                <textarea>{response}</textarea>
            </div>
            <div style={{ width: 350, height: 100, margin: '0 20 0 20' }}>
                <p>Error:</p>
                <textarea>{error}</textarea>
            </div>
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
