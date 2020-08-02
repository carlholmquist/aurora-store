import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from  '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }

    onChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label='Email'
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.onChange} 
                        required 
                    />

                    <FormInput  
                        label='Password' 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.onChange}  
                        required 
                    />
                    <div className='form-button'>
                        <CustomButton type='submit' > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;