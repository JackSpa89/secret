import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions () {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;

        return {
            width,
            height,
        };
    }

    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize () {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, [ hasWindow ]);

    return windowDimensions;
};

export const isMobile = () => {
    const { width } = useWindowDimensions();
    let isMobile: boolean;

    width === null ? isMobile = true : isMobile = width < 1500;

    return isMobile;
};
