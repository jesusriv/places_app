import styled from 'styled-components';
import google from '../../assets/google.png';

export const LandingButton = styled.button`
    width: 200px;
    padding: 15px 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background: none;
    border: 2px solid white;
    border-radius: 15px;

    &:hover {
        background-color: #fff;
        color: #181818;
        cursor: pointer;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    color: white;
    font-weight: 400;
    font-size: 16px;
    border: none;
    background-color: #1E885D;
    padding: 15px 0;
    border-radius: 5px;
`;

export const GoogleButton = styled.button`
    width: 100%;
    color: white;
    font-weight: 400;
    font-size: 16px;
    border: none;
    background-color: #4285F4;
    padding: 15px 0;
    border-radius: 5px;
    background-image: url('${google}');
    background-repeat: no-repeat;
    background-size: 55px;
    background-position: 0;
`;

export const AppleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    font-weight: 200;
    font-size: 16px;
    border: none;
    background-color: #000;
    padding: 15px 0;
    border-radius: 5px;

    img {
        position: relative;
        width: 25px;
        bottom: 1px;
        right: 5px;
    }
`;

export const CurrentLocation = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    border: none;
    position: fixed;
    bottom: 30px;
    right: 20px;
`;

export const NewPin = styled(CurrentLocation)`
    bottom: 90px;
`;