import styled, { keyframes } from 'styled-components';

const media = {
    tablet: '@media(min-width: 500px)',
    tabletLandscape: '@media(max-height: 800px)',
    desktop: '@media(min-width: 700px)'
}

export const DashboardStyle = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    nav {
        background-color: #282828;
        width: 200px;
        display: flex;
        justify-content: space-evenly;
        padding: 15px 5px; 
        border-radius: 5px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
        z-index: 2;
        p {
            font-size: 14px;
            color: #fff;
        }
        position: fixed;
        align-self: flex-end;
        margin: 40px 20px 40px 0;
    }

    img {
        margin-top: 15px;
        margin-right: 20px;
        width: 40px;
        align-self: flex-end;
        &:hover {
            cursor: pointer;
        }
    }

    .outer {
        position: relative;
        width: 90%;
        height: 400px;
        transform: translate(0 -50%);
        top: 20px;
        bottom: 0;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 2;
        ${media.tablet} {
            width: 400px;
        }

        ${media.desktop} {
            width: 680px;
            padding: 30px;
            margin-top: 90px;
        }

        hr {
            position: absolute;
            top: 10px;
            transform: translate(-50%, 0);
            left: 50%;
            border: 2px solid rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            width: 40px;
        }
        transition: .6s linear all;
    }

    .closed {
        top: 65%;
        transition: .6s linear all;

        ${media.tabletLandscape} {
            top: 63%;
        }

        ${media.desktop} {
            top: 70%;
        }

    }
`;

const grow = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 100px;
    }
`;

export const BottomMenu = styled.div`
    transform: translate(-50%, 0);
    left: 50%;
    top: 55px;
    position: absolute;
    width: 90%;
    height: 100px;
    background-color: #282828;
    color: #fff;
    animation: ${grow} .2s ease-in;
    animation-direction: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
`;