import styled from 'styled-components';
import Map from './Map/Map';

const MapContainer = styled.div`
  background-color: #838383;  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export default function Maps() {
    return (
        <MapContainer>
            <Map />
        </MapContainer>
    )
};