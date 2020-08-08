//Package imports
import React from 'react';

//Component imports
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

//Style imports
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <div className='sign-in'>
            <SignIn/>
        </div>
        <div className='sign-up'>
            <SignUp />
        </div>
    </div>
)

export default SignInAndSignUpPage;