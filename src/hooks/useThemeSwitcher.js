import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme:dark)"
    const [mode, setMode] = useState("")

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem("theme")
    }, [])

    return (
        <div>

        </div>
    );
};

export default useThemeSwitcher;