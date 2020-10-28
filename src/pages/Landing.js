import { LandingStyle } from './landingStyles';
import { LandingButton } from '../components/Button/buttonStyles';

export const Landing = () => {
    return (
        <LandingStyle>
            <header>
                <h2>places</h2>
                <p>LOGIN</p>
            </header>
            <div className='landing-bottom'>
                <h1>WHERE TO NEXT?</h1>
                <LandingButton>
                    Get Started
                </LandingButton>
            </div>
        </LandingStyle>
    );
}