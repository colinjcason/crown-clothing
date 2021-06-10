import React, { useState } from 'react'
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss'

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
        }

        signUpStart({ displayName, email, password });
    }

   const handleChange = e => {
        const { name, value } = e.target
        setUserCredentials({...userCredentials, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span></span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName} 
                onChange={handleChange}
                label='Display Name'
                required
                >
                </FormInput>
                <FormInput 
                type='email'
                name='email'
                value={email} 
                onChange={handleChange}
                label='Email'
                required
                >                        
                </FormInput>
                <FormInput 
                type='password'
                name='password'
                value={password} 
                onChange={handleChange}
                label='Password'
                required
                >
                </FormInput>
                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword} 
                onChange={handleChange}
                label='Confirm Password'
                required
                >
                </FormInput>
                <Button type='submit'>SIGN UP</Button>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);
  