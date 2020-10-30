import React from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';

const Container = styled.div`
    overflow: hidden;
    > .mapContainer {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
`;

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -118.5374,
            lat: 34.4466,
            zoom: 10,
            isLoading: true
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-118.5374, 34.4466],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        map.flyTo({
            center: [this.state.lng, this.state.lat],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    }

    render() {
        return (
            <Container>
                <div className="mapContainer"
                    ref={el => this.mapContainer = el}
                />
            </Container>
        )
    }
}

export default Map;