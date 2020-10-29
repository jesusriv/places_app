import styled from 'styled-components';

export const LandingStyle = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    position: realtive;s
    background-position: center;

    .landing-bottom {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        
        align-items: center;
        justify-content: center;

        h1 {
            text-align: center;
            color: #fff;
            font-size: 80px;
        }
    }
    
`;