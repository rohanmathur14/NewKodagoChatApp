
import { getSession, useSession } from 'next-auth/react'
import gVerify from '../lib/gcaptchVerify';
import { getToken } from "next-auth/jwt"

export default async function middleWareAPI(req, res) {
    try {

        const forwarded = req.headers["x-forwarded-for"]
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress

        if (req.method == 'POST') {
            //return true;
            const { route } = req.query;
            //console.log("Middle")
            //captch verification add
            // console.log("body data",req.body)
            const body = req?.body ? (typeof req.body === 'object') ? req.body : JSON.parse(req.body) : '';
            const captch = body?.captcha || '';
            //console.log("body data after",body)

            if (route == 'login-user' || route == 'login-google' || route == 'login-facebook' || route == 'newsletter-subscriber' || route == 'partner-with-us' || route == 'contact-us' || route == 'get-master-module-details' || route == 'faq-list' || route == 'dynamic-pages-content' || route == 'search-keywords' || route == "verify-password" || route == "signup-details" || route == 'state-wise-cities' || route == "check-mail" || route == "cities-list" || route == "categories-home" || route == "area-listing-by-city" || route == "save-free-listing" || route == "city-state-listing-by-statename"  || route == "otp-verify-and-user-registration" || route == "master-package-listing" || route == "search-businesses" || route == "user-testimonials" || route == "sendotp-business" || route == "resend-otp" || route =="save-apply-job-form" || route == "check-user-already-register") {
                return true
            }

            //routes validated with captcha
            if (route == "send-otp" || route == "send-otp-verify" || route == "forgot-password" || route == "submit-details-signup" || route == "otp-verify-and-user-registration" || route == "listing-report-abuse" || route == "report-comment") {
                const resRoute = await gVerify(captch)
                console.log(resRoute,"resRoute..............")
                return resRoute;
            }

            const session = await getSession({ req })
            const token = await getToken({ req })
            //console.log("SESSION IS", session, token)
            if (session) {
                //console.log("SESSION CHEKC", session)
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.log("_______________________Middelware error___________________________",err)
        return false;
    }

}
