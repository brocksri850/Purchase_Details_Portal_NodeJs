import { Router } from "express";
import { routerResponse } from "../common/responseQuery"
import customerAuthUtils from "../../utils/customerAuthUtils";
import addToCartService from "../services/orderDetailsService";


export class AddToCartRouter {

    public router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {

        this.router.get("/list", customerAuthUtils.verifyClientSessionMiddeleware, this.orderdProductBaseCustomer);

    }

    public orderdProductBaseCustomer(req: any, res: any) {

        addToCartService.orderdProductBaseCustomer(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })
    }

}

var addToCartRouter = new AddToCartRouter();
const router = addToCartRouter.router
export default router