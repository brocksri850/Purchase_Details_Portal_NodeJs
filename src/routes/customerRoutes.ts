import { query, Router } from "express";
import { routerResponse } from "../common/responseQuery"
import signupService from "../services/signupService";


export class CustomerRouter {

    public router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {

        this.router.post("/signup", this.signup);

    }

    public signup(req: any, res: any) {

        signupService.signup(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })

    }


}

var customerRouter = new CustomerRouter();
const router = customerRouter.router
export default router