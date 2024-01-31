import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}

export const useWindowDimensions = (): WindowDimensions => {

    const hasWindow = typeof window !== 'undefined';

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getWindowDimensions(): WindowDimensions {
        const width = hasWindow ? window.innerWidth : 0;
        const height = hasWindow ? window.innerHeight : 0;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            const handleResize = () => {
                setWindowDimensions(getWindowDimensions());
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [getWindowDimensions, hasWindow]);

    return windowDimensions;
};