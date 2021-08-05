import React from 'react'
import { useEffect } from 'react'
import ViewSDKClient from '../class/ViewSDKClient'

function Cv() {
    const { REACT_APP_CLIENT_ID } = process.env;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
        script.async = true;
        document.body.appendChild(script);
        console.log("useeffect2")
        return () => {
          document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        const viewSDKClient = new ViewSDKClient();
        const viewPdf = viewSDKClient.ready().then(() => {
            viewSDKClient.previewFile(REACT_APP_CLIENT_ID, "pdf-div", {});
            viewSDKClient.registerEventsHandler();
        });
        return () => viewPdf
    }, [REACT_APP_CLIENT_ID])

    return (
        <div id="pdf-div" className="full-window-div"/>
    )
}

export default Cv
