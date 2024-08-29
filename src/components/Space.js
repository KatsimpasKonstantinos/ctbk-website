import './Space.css';

import { useEffect } from "react";
import { computed, signal } from '@preact/signals-react';
const open = signal("Geschlossen");
const icon = signal("https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg");

function Space() {
    const refreshRate = 60 * 1000;

    function checkSpace() {
        fetch("https://spaceapi.ctbk.de/")
            .then(response => response.json())
            .then(data => {
                if (data.state.open) {
                    open.value = "Offen"
                    icon.value = data.state.icon.open;
                } else {
                    open.value = "Geschlossen";
                    icon.value = data.state.icon.closed;
                }
                console.log("Der Space ist " + open.value);
                console.log("Icon: " + icon.value);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const interval = setInterval(() => {
        checkSpace();
    }, refreshRate);
    checkSpace();

    useEffect(() => {
        return () => {
            clearInterval(interval);
        }
    }, [interval]);

    let iconImage = computed(() => {
        return <img className="SpaceImage" src={icon.value} alt="Space Icon" />;
    });

    return (
        <span>
            {iconImage}
        </span>
    );
}

export default Space;