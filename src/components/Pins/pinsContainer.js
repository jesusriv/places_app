import styled from 'styled-components';

const media = {
    desktop: '@media(min-width: 700px)'
}

export const PinsContainer = styled.div`
    width: 100%;
    height: 90%;
    background-color: #fff;
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    z-index: 2;
    overflow-y: scroll;
    bottom: 0;
    border-radius: 10px;

    ${media.desktop} {
        display: flex;
        flex-wrap: wrap;
    }
`;