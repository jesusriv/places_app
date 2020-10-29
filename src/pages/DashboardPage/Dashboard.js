import { useState, useEffect } from 'react';

import { DashboardStyle, BottomMenu } from './dashboardStyles';
import { CurrentLocation, NewPin } from '../../components/Button/buttonStyles';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import menu from '../../assets/menu.png';
import { PinsContainer } from '../../components/Pins/pinsContainer';
import Pin from '../../components/Pins/pins';

import data from '../../data/places';

export const Dashboard = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [menuOn, setMenu] = useState(false);
    const [viewMore, setViewMore] = useState(false);
    const [viewPin, setViewPin] = useState(false);
    const [viewPins, setViewPins] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    }

    return (
        <DashboardStyle onClick={() => {
            return (
                menuOn || viewPins ? (
                    setMenu(false),
                    setViewPins(false)
                ) :
                    null
            )
        }}>
            {
                windowSize > 700 ?
                    <nav>
                        <p>SETTINGS</p>
                        <p>LOG OUT</p>
                    </nav> :
                    <img
                        src={menu}
                        alt="hamburger"
                        onClick={() => setMenu(!menuOn)}
                    />
            }

            {
                menuOn ?
                    <BottomMenu>
                        <p>SETTINGS</p>
                        <p>LOG OUT</p>
                    </BottomMenu> :
                    null
            }
            <form style={{ width: '100%', margin: '0 auto' }}>
                <SearchBar placeholder="City, state, etc." />
            </form>
            <div className={!viewPins ? 'closed outer' : 'outer'}>
                <hr onClick={() => setViewPins(!viewPins)} />
                <PinsContainer>
                    {data.map((p, i) => {
                        return (
                            <Pin
                                key={i}
                                location={p.location}
                                body={p.body}
                                date={p.date}
                                img={p.img}
                                viewMore={viewMore}
                                viewPin={viewPin}
                            />
                        );
                    })}
                </PinsContainer>
            </div>
            <CurrentLocation />
            <NewPin />
        </DashboardStyle >
    );
}