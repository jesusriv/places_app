import { LandingStyle } from './landingStyles';
import { LandingButton } from '../../components/Button/buttonStyles';
import { HeaderStyle } from '../../components/Header/headerStyle';
export const Landing = () => {
    return (
        <LandingStyle>
            <HeaderStyle>
                <h2>places</h2>
                <p>LOGIN</p>
            </HeaderStyle>
            <div className='landing-bottom'>
                <h1>WHERE TO NEXT?</h1>
                <LandingButton>
                    Get Started
                </LandingButton>
            </div>
        </LandingStyle>
    );
}