class ViewSDKClient {
    constructor() {
        this.readyPromise = new Promise((resolve) => {
            if (window.AdobeDC) {
                resolve();
            } else {
                document.addEventListener("adobe_dc_view_sdk.ready", () => {
                    resolve();
                });
            }
        });
        this.adobeDCView = undefined;
    }

    ready() {
        return this.readyPromise;
    }

    previewFile(CLIENT_ID, divId, viewerConfig) {
        const config = {
            clientId: CLIENT_ID,
        };
        if (divId) {
            config.divId = divId;
        }
        this.adobeDCView = new window.AdobeDC.View(config);
        const previewFilePromise = this.adobeDCView.previewFile({
            content: {
                location: {
                    url: "../assets/Resume-Carlos-Brito-English.pdf",
                },
            },
            metaData: {
                fileName: "Carlos Brito Resume.pdf",
                id: "6d07d124-ac85-43b3-a867-36930f502ac6",
            }
        }, viewerConfig);
        return previewFilePromise;
    }

    registerEventsHandler() {
        this.adobeDCView.registerCallback(
            window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER, event => {
                console.log(event);
            },
            {
                enablePDFAnalytics: true,
            }
        );
    }
}

export default ViewSDKClient;
