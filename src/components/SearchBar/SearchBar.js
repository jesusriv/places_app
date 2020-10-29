import styled from 'styled-components';

import magnify from '../../assets/magnigy.png';

const media = {
    desktop: '@media(min-width: 700px)'
}

export const SearchBar = styled.input.attrs(props => ({
    type: 'text'
}))`
    margin: 20px;
    width: 90%;
    padding: 15px 40px;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    background-image: url('${magnify}');
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: 10px 15px;
    font-size: 18px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    
    ::placeholder {
        font-size: 18px;
    }

    &:focus,
    &:active {
        outline: none;
    }

    ${media.desktop} {
        width: 350px;
        margin-top: 40px;
    }
`;