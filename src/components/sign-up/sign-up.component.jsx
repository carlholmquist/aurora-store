import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        }
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value})

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, displayName, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("Password don't match")
            return;
        } 
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName})
            this.setState({
                email: '',
                displayName: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log('Error creating User:', error)
        }
    }

    render() {
        const { email, displayName, password, confirmPassword } = this.state
        return (
            <div className='sign-in'>
                <h2>I don't have an account</h2>
                <span> Sign up with email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label='Email'
                        name='email' 
                        type='email' 
                        value={email}
                        handleChange={this.onChange} 
                        required 
                    />

                    <FormInput 
                        label='Displayname '
                        name='displayName' 
                        type='text' 
                        value={displayName}
                        handleChange={this.onChange} 
                        required 
                    />

                    <FormInput  
                        label='Password' 
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={this.onChange}  
                        required 
                    />

                    <FormInput  
                        label='Confirm Password' 
                        name='confirmPassword' 
                        type='password' 
                        value={confirmPassword} 
                        handleChange={this.onChange}  
                        required 
                    />
                    <div className='form-button'>
                        <CustomButton type='submit' > Sign In </CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignUp;