import { Router } from "express";
import { routerResponse } from "../common/responseQuery"
import loginService from "../services/loginService";
import signupService from "../services/signupService";
import customerAuthUtils from "../../utils/customerAuthUtils";
import productService from "../services/productService";


export class CustomerRouter {

    public router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {

        this.router.post("/signup", this.signup);
        this.router.post("/login", this.login);

    }

    public signup(req: any, res: any) {

        signupService.signup(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })
    }

    public login(req: any, res: any) {

        loginService.login(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })
    }

}

var customerRouter = new CustomerRouter();
const router = customerRouter.router
export default router