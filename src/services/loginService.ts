import jwtUtils from "../../utils/jwtUtils";
import { models } from "../models/model";
import commonService from "./commonService";
import * as async from "async";
import * as crypto from "crypto";
import constant from "../common/constant";

import * as  _ from "lodash";

export interface EntityAttributes { }

export class LoginService {

    public login(req: any, callback: Function) {

        var data = req.body;
        async.waterfall([
            function (waterfallCallback: Function) {
                var condition: any = {
                    where: {
                        email: data.email
                    }
                }
                commonService.findOne(condition, models.Customer, function (err: Error, userDtl: any) {
                    if (_.isEmpty(userDtl)) return waterfallCallback(new Error(constant.Error1), null);
                    waterfallCallback(err, userDtl)
                })
            },
            function (userDtl: any, waterfallCallback: Function) {
                var password_string = crypto.pbkdf2Sync(data.password, userDtl.salt, 1000, 64, `sha512`).toString(`hex`);

                if (userDtl.password_string === password_string) {
                    loginService.loginSessionCreate(userDtl, function (err: Error, response: any) {
                        waterfallCallback(err, response.payload)
                    })
                } else {
                    var error = new Error(constant.InCorPass)
                    waterfallCallback(error, null);
                }
            }
        ], function (err, result) {
            callback(err, result)
        })
    }

    public loginSessionCreate(userDtl: any, callback: Function) {

        var payload: any = {
            user_id: userDtl.user_id,
            first_name: userDtl.first_name,
            last_name: userDtl.last_name,
            email: userDtl.email,
            phone_number: userDtl.phone_number,
            user_name: userDtl.user_name
        }
        async.waterfall([
            function (waterfallCallback: Function) {
                var requiredStringForJwtToken = "User#Id_" + userDtl.user_id;
                async.parallel({
                    accessToken: function (parallelCallback: Function) {
                        jwtUtils.jwtSignSetWithExpireTime({ redisId: requiredStringForJwtToken }, function (err: any, token) {
                            if (err) return waterfallCallback(new Error(constant.loginErr), null);
                            return parallelCallback(null, token)
                        })
                    },
                    refreshToken: function (parallelCallback: Function) {
                        jwtUtils.jwtSign({ redisId: requiredStringForJwtToken }, function (err: any, token: any) {
                            if (err) return waterfallCallback(new Error(constant.loginErr), null);
                            return parallelCallback(null, token)
                        })
                    }
                }, function (err, response) {
                    waterfallCallback(err, response, requiredStringForJwtToken)
                })
            },
            function (jwtToken: any, requiredStringForJwtToken: any, waterfallCallback: Function) {

                payload.accessToken = jwtToken.accessToken;
                payload.refreshToken = jwtToken.refreshToken;
                payload.created_dt = new Date();
                payload.key = requiredStringForJwtToken

                var data: any = {};

                data.key = requiredStringForJwtToken
                data.payload = payload;

                var reqFinalJson: any = {
                    payload: payload,
                }
                commonService.update(data, { where: { user_id: userDtl.user_id } }, models.Customer, function (err: Error, payload: any) {
                    waterfallCallback(err, reqFinalJson)
                })
            }
        ], function (err, result) {
            callback(err, result)
        })
    }

}

export const loginService = new LoginService()
export default loginService