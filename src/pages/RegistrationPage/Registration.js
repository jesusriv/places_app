import { useState } from 'react';

import { RegistrationStyle } from './registrationStyles';
import { HeaderStyle } from '../../components/Header/headerStyle';
import { FormContainer } from '../../components/Form/formContainer';
import { SubmitButton, GoogleButton, AppleButton } from '../../components/Button/buttonStyles';

import apple from '../../assets/apple.png';

export const Registration = () => {
    const [login, setLogin] = useState(false);
    return (
        <RegistrationStyle>
            <HeaderStyle style={{ background: 'none' }}>
                <h2>places</h2>
            </HeaderStyle>
            <div className='reg-bottom'>
                {
                    !login ?
                        <FormContainer>
                            <form>
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                <SubmitButton>Submit</SubmitButton>
                                <p>or</p>
                                <GoogleButton>Sign up with Google</GoogleButton>
                                <AppleButton>
                                    <img src={apple} alt="apple-logo" />
                                Sign up with Apple
                            </AppleButton>
                                <p>Already have an account? Sign in <span onClick={() => setLogin(!login)}>here</span>.</p>
                            </form>
                        </FormContainer> :
                        <FormContainer>
                            <form>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <SubmitButton>Submit</SubmitButton>
                                <p>or</p>
                                <GoogleButton>Sign in with Google</GoogleButton>
                                <AppleButton>
                                    <img src={apple} alt="apple-logo" />
                            Sign in with Apple
                        </AppleButton>
                                <p>Don't have an account? Sign up <span onClick={() => setLogin(!login)}>here</span>.</p>
                            </form>
                        </FormContainer>
                }
            </div>
        </RegistrationStyle>
    );
}