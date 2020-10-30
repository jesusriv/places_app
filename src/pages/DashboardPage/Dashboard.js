import { useState, useEffect } from 'react';

import { DashboardStyle, BottomMenu } from './dashboardStyles';
import { CurrentLocation, NewPin } from '../../components/Button/buttonStyles';
import SearchForm from '../../components/SearchBar/SearchBar';
import menu from '../../assets/menu.png';
import Pins from '../../components/Pins/pinsContainer';

import Maps from '../../components/Map/Maps';

export const Dashboard = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [menuOn, setMenu] = useState(false);
    const [viewPins, setViewPins] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    }

    const handlePins = () => {
        return setViewPins(!viewPins);
    };
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
            <Maps />
            <SearchForm />
            <Pins
                viewPins={viewPins}
                handlePins={handlePins}
            />
            <CurrentLocation />
            <NewPin />
        </DashboardStyle >
    );
}