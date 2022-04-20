import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../Images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            <p className='text-center'>OR</p>
            <div className='text-center'>
                <Button onClick={() => signInWithGoogle()} variant="info w-50"> <img style={{ height: 20 }} src={google} alt="" /> Google Sign In</Button>
            </div>
        </div>
    );
};

export default SocialLogin;