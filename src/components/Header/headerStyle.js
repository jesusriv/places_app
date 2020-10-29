import styled from 'styled-components';

const media = {
    desktop: '@media(min-width: 1000px)'
}

export const HeaderStyle = styled.div`

    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;

    ${media.desktop} {
        padding: 25px 150px;
    }

    h2 {
        color: #1E885D;

        ${media.desktop} {
            font-size: 30px;
        }
    }

    p {
        ${media.desktop} {
            font-size: 22px;
        }
    }
`;