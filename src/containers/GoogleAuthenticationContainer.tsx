import React from 'react';
import GoogleLogin from 'react-google-login';

type Props = {
    onSuccess: () => void;
    onFailure: () => void;
}

const GoogleAuthenticationContainer: React.FC<Props> = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            clientId="169380190629-fkk4qpckf4avmfsfbcu8s9dqaif5sfod.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleAuthenticationContainer;
