import "server-only";

import arcjet, {
    detectBot,
    fixedWindow,
    protectSignup,
    sensitiveInfo,
    shield,
    slidingWindow,

} from '@arcjet/next';
import { env } from './env';


export {
    detectBot,
    fixedWindow,
    protectSignup,
    sensitiveInfo,
    shield,
    slidingWindow,
};

export default arcjet({
    key: env.ARCJET_KEY,
    characteristics: ['fingerprint'],
    
    // define base rules here can also be empty if you want to have any base base
    rules:[
        shield({
            mode: "LIVE",
        })
    ]
});