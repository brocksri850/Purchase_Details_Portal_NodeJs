import * as jwt from "jsonwebtoken";
import constant from "../src/common/constant";
export class JWTServer {

    constructor() { }

    public jwtSign(data: any, callback: Function) {

        jwt.sign(data, constant.SecretKey, { algorithm: 'HS512' }, function (err, token) {
            callback(err, token)
        });
    }

    public jwtSignSetWithExpireTime(data: any, callback: Function) {

        jwt.sign(data, constant.SecretKey, { algorithm: 'HS512', expiresIn: '10d' }, function (err, token) {
            callback(err, token)
        });
    }

    public jwtVerify(token: string, callback: Function): any {

        jwt.verify(token, constant.SecretKey, function (err, decoded: any) {
            callback(err, decoded)
        });
    }

}
const jwtServer = new JWTServer();
export default jwtServer;