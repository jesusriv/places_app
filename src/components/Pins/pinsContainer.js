import styled from 'styled-components';
import Pin from '../../components/Pins/pins';
import data from '../../data/places';

const media = {
    desktop: '@media(min-width: 700px)'
}

const PinsWrapper = styled.div`
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

const OuterContainer = () => {
    return (
        <PinsWrapper>
            {data.map((p, i) => {
                return (
                    <Pin
                        key={i}
                        location={p.location}
                        body={p.body}
                        date={p.date}
                        img={p.img}
                    />
                );
            })}
        </PinsWrapper>
    );
};

const Pins = ({ handlePins, viewPins }) => {
    return (
        <div className={!viewPins ? 'closed outer' : 'outer'}>
            <hr onClick={() => handlePins(!viewPins)} />
            <OuterContainer />
        </div>
    );
}

export default Pins;