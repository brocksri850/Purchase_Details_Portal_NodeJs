import constant from "../common/constant";
import commonService from "./commonService";
import * as async from "async";
import * as crypto from "crypto";
import { models } from "../models/model";
import commonLogics from "../common/commonLogic";

export interface EntityAttributes { }

export class SignupService {

    public signup(req: any, callback: Function) {
        var data = req.body;

        async.waterfall([
            function (waterfallCallback: Function) {
                var isValidPassword = commonLogics.checkPassword(data.password)
                if (isValidPassword == false) {
                    return callback(null, constant.InValidPassword)
                } else {
                    waterfallCallback(null, null)
                }
            },
            function (dummy: any, waterfallCallback: Function) {

                commonService.findOne({ where: { email: data.email, user_name: data.user_name } }, models.Customer, function (err: any, response: any) {
                    if (err) return waterfallCallback(err, null);
                    if (response) {
                        if (response.user_name == data.user_name) return callback(new Error("Username number already exist."), null);
                        if (response.email == data.email) return callback(new Error("Email already exist."), null);
                        return callback(new Error("Something went wrong"), null);
                    } else {
                        waterfallCallback(null, null);
                    }
                })
            },
            function (Dummy: any, waterfallCallback: Function) {

                data.salt = crypto.randomBytes(16).toString('hex');
                data.hash_password = crypto.pbkdf2Sync(data.password, data.salt, 1000, 64, `sha512`).toString(`hex`);
                data.created_dt = new Date().toISOString();

                commonService.findOrCreate({ email: data.email }, data, models.Customer, function (err: any, response: any) {
                    waterfallCallback(err, response);
                })
            },
        ], function (err, result) {
            callback(err, result);
        })
    }

}

export const signupService = new SignupService()
export default signupService