import React from 'react';
import GoogleLogin from 'react-google-login';

type Props = {
    onSuccess: () => void;
    onFailure: () => void;
}

const GoogleAuthenticationContainer: React.FC<Props> = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleAuthenticationContainer;
