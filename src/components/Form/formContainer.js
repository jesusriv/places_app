import styled from 'styled-components';

const media = {
    desktop: '@media(min-width: 1000px)',
}

export const FormContainer = styled.div`
    width: 90%;
    height: 600px;
    background-color: #282828;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.desktop} {
        width: 550px;
        margin-top: 60px;
    }

    form {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 90%;
        height: 100%;
        
        input {
            color: #fff;
            width: 100%;
            padding: 16px 10px;
            background-color: rgba(0, 0, 0, 0.5);
            border: none;
            border-radius: 5px;
            font-size: 16px;
        }

        p {
            color: #fff;
            font-weight: 200;
            font-size: 12px;
        }

        span { 
            color: #1E885D;
            &:hover {
                cursor: pointer;
            }
        }
    }
`;