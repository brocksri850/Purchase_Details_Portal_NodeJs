import * as _ from "lodash";
import { models } from "../src/models/model";
import commonService from "../src/services/commonService";
import jwtUtils from "./jwtUtils";

export class AuthServer {

    constructor() { }

    public verifyClientSessionMiddeleware(req: any, res: any, next: any) {

        var tokenFromHeader = req.query.token || req.headers['x-access-token'];

        if (!tokenFromHeader) {
            var error = new Error("Token is not detected")

            var response = {
                status: false,
                message: "Auth Error",
                code: 400,
                err: error.message
            }

            return res.status(400).send(response)
        }

        jwtUtils.jwtVerify(tokenFromHeader, function (err: any, decode: any) {

            var error = new Error("Authendication Expired , Please login again")

            var errResponse = {
                status: false,
                message: "Auth Error",
                code: 400,
                err: error.message
            }

            if (_.isError(err)) return res.status(400).send(errResponse);

            commonService.findOne({ where: { key: decode.redisId } }, models.Customer, function (err, response) {

                if (err) return res.status(400).send(errResponse);
                if (!response) return res.status(400).send(errResponse);

                var JsonDecode = JSON.parse(response.payload);

                if (tokenFromHeader === JsonDecode.accessToken) {
                    req.session = JsonDecode
                    return next();
                }
                errResponse.err = "Your session is terminated as we have detected another login.Re-login to continue.";
                return res.status(400).send(errResponse);
            })
        });
    }
}
const authServer = new AuthServer();
export default authServer;