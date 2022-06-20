import mixpanel from "mixpanel-browser";

export default class MixpanelTracking {
    static _instance;

    static getInstance() {
        if(MixpanelTracking._instance == null){
            return new MixpanelTracking();
        }
        return this._instance;
    }

    constructor(config) {
        if(MixpanelTracking._instance){
            throw new Error("MixpanelTracking is a singleton class and can only be instantiated once");
        }
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
            debug: false,
            ignore_dnt: true
        });
    }

    track(event, properties = {}) {
        mixpanel.track(event, properties);
    }
}