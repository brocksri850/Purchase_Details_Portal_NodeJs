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
                commonService.findOne(condition, models.Customer, function (err: Error, cusDtl: any) {
                    if (_.isEmpty(cusDtl)) return waterfallCallback(new Error(constant.Error1), null);
                    waterfallCallback(err, cusDtl)
                })
            },
            function (cusDtl: any, waterfallCallback: Function) {
                var hash_password = crypto.pbkdf2Sync(data.password, cusDtl.salt, 1000, 64, `sha512`).toString(`hex`);

                if (cusDtl.hash_password === hash_password) {
                    loginService.loginSessionCreate(cusDtl, function (err: Error, response: any) {
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

    public loginSessionCreate(cusDtl: any, callback: Function) {

        var payload: any = {
            customer_id: cusDtl.customer_id,
            first_name: cusDtl.first_name,
            last_name: cusDtl.last_name,
            email: cusDtl.email,
            phone: cusDtl.phone,
            user_name: cusDtl.user_name
        }
        async.waterfall([
            function (waterfallCallback: Function) {
                var requiredStringForJwtToken = "Customer#Id_" + cusDtl.customer_id;

                jwtUtils.jwtSign({ redisId: requiredStringForJwtToken }, function (err: any, token) {
                    if (err) return waterfallCallback(new Error(constant.loginErr), null);
                    waterfallCallback(err, token, requiredStringForJwtToken)
                })
            },
            function (jwtToken: any, requiredStringForJwtToken: any, waterfallCallback: Function) {

                payload.accessToken = jwtToken;
                payload.created_dt = new Date();
                payload.key = requiredStringForJwtToken

                var data: any = {};

                data.key = requiredStringForJwtToken
                data.payload = payload;

                var reqFinalJson: any = {
                    payload: payload,
                }
                commonService.update(data, { where: { customer_id: cusDtl.customer_id } }, models.Customer, function (err: Error, payload: any) {
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