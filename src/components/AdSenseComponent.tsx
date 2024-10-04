import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

const AdSenseComponent: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.adsbygoogle && process.env.NODE_ENV !== 'development') {
            window.adsbygoogle.push({});
        }
    }, [location]);

    return null;
};

export default AdSenseComponent;