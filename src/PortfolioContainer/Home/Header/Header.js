import React, { useState } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'


export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if(!currentScreen || !currentScreen.screenInView) return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenIndex);
        if(screenIndex < 0) return;
    }
    let currentScreenSubscription = ScrollService.currentScreenBroadCaster;

    const getHeaderOptions = () => {
        return(
            TOTAL_SCREENS.map((screen, i) => (
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
                onClick={() => switchScreeen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        )
    }

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";
        if (index < TOTAL_SCREENS.length -1)
        classes += "header-option-separator";

        if (selectedScreen === index)
        classes += "selected-header-option";
        return;
    }

    const switchScreeen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name)
        if (!screenComponent) return;

        screenComponent.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div>
            
        </div>
    )
}