import { Router } from "express";
import { routerResponse } from "../common/responseQuery"
import customerAuthUtils from "../../utils/customerAuthUtils";
import addToCartService from "../services/orderDetailsService";
import productService from "../services/productService";


export class AddToCartRouter {

    public router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {

        this.router.post("/import", customerAuthUtils.verifyClientSessionMiddeleware, this.productImport);
    }

    public productImport(req: any, res: any) {

        productService.productImport(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })
    }

}

var addToCartRouter = new AddToCartRouter();
const router = addToCartRouter.router
export default router