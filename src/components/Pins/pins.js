import styled from 'styled-components';

export const PinContainer = styled.div`
    width: 290px;
    height: 140px;
    -webkit-box-shadow: 0 8px 14px -6px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 8px 14px -6px rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 14px -6px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 15px;
`;

const Left = styled.div`
  width: 110px;
  height: 100%;
  border-radius: 20px;
  -webkit-box-shadow: 0 8px 14px -6px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 8px 14px -6px rgba(0, 0, 0, 0.6);
  box-shadow: 1px 2px 14px -6px rgba(0, 0, 0, 0.6);
  position: relative;

  &:before {
    content: "";
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  &:after {
    content: "";
    background-color: #4ca38f;
    position: absolute;
    border-radius: 20px;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.16;
  }
`;

const Right = styled.div`
  padding: 6px 10px;
  flex: 1;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  h2 {
    font-weight: 200;
    font-size: 13px;
  }

  > p {
    font-size: 14px;
  }

  > p:nth-child(3) {
    font-weight: 200;
  }
`;

export default function Pin(props) {
    const { location, body, date, img, viewMore, viewPin } = props;
    const data = {
        location,
        body,
        img,
    }
    return (
        <PinContainer
            onClick={() => {
                viewMore();
                viewPin(data);
            }}
        >
            <Left img={img} />
            <Right>
                <h2>{location}</h2>
                <p>{body}</p>
                <p>{date}</p>
            </Right>
        </PinContainer>
    );
}