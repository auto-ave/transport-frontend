import { APPSTORE_URL, PLAYSTORE_URL } from '@utils/contants/general';
import React, { useEffect } from 'react';
import {
    isAndroid,
    isIOS
} from "react-device-detect";

function AppRedirect() {
    useEffect(() => {
        if (isAndroid) {
            window.location.href = PLAYSTORE_URL
            setTimeout(() => {
                window.location.href = '/'
            }, 1500)
        } else if (isIOS) {
            window.location.href = APPSTORE_URL
            setTimeout(() => {
                window.location.href = '/'
            }, 1500)
        } else {
            window.location.href = '/'
        }
    }, []);

    return (
        <div>

        </div>
    );
}

export default AppRedirect;