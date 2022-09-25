import { Router } from "express";
import { routerResponse } from "../common/responseQuery"
import customerAuthUtils from "../../utils/customerAuthUtils";
import orderService from "../services/orderService";


export class OrderRouter {

    public router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {

        this.router.post("/createorder", customerAuthUtils.verifyClientSessionMiddeleware, this.createOrder);
        this.router.put("/updateorder", customerAuthUtils.verifyClientSessionMiddeleware, this.updateOrder);
        this.router.put("/cancelorder", customerAuthUtils.verifyClientSessionMiddeleware, this.cancelOrder);

    }

    public createOrder(req: any, res: any) {

        orderService.createOrder(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })
    }

    public updateOrder(req: any, res: any) {

        orderService.updateOrder(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })
    }

    public cancelOrder(req: any, res: any) {

        orderService.cancelOrder(req, function (err, response) {
            var commonResponse = routerResponse.objResponse(err, response, req, res)
            res.send(commonResponse)
        })
    }


}

var orderRouter = new OrderRouter();
const router = orderRouter.router
export default router