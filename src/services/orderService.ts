import commonService from "./commonService";
import { models } from "../models/model";
import async = require("async");
import _ = require("lodash");

export interface EntityAttributes { }

export class OrderService {


    public createOrder(req: any, callback: Function) {

        var data = req.body;
        var session = req.session;

        var product = data.productDetail;

        async.waterfall([
            function (waterfallCallback: Function) {

                var reqProductArray: any = [];
                var productIds: any;

                if (!_.isEmpty(product)) {
                    product?.forEach((element: any) => {
                        productIds = element.product_id;
                        reqProductArray.push(productIds)
                    })
                }
                var condition: any = {
                    where: {
                        product_id: reqProductArray
                    }
                }
                commonService.findAll(condition, models.Product, function (err: Error, response: any) {
                    if (err) return callback(err)
                    waterfallCallback(err, response)
                });
            },
            function (productDetail: any, waterfallCallback: Function) {

                var reqdata: any = {};
                var total_amount = 0;
                var quantity = 0;

                if (!_.isEmpty(productDetail)) {
                    product.forEach((element1) => {
                        productDetail.forEach((element) => {
                            if (element.product_id == element1.product_id) {
                                total_amount += Number(element.price * element1.quantity)
                                quantity += Number(element1.quantity)
                            }
                        })
                    })
                }
                reqdata.total_amount = total_amount;
                reqdata.quantity = quantity;
                reqdata.customer_id = session.customer_id;
                reqdata.delivery_address = data.delivery_address ? data.delivery_address : "";
                reqdata.description = data.description ? data.description : ""
                reqdata.delivery_datetime = data.delivery_datetime;
                reqdata.created_by = session.customer_id;
                reqdata.created_dt = new Date().toISOString();
                commonService.create(reqdata, models.Order, function (err: Error, orderRes: any) {
                    waterfallCallback(err, orderRes, productDetail);
                })
            },
            function (orderRes: any, productDetail: any, waterfallCallback: Function) {

                var reqAddToCartArray = [];
                var total_amount = 0;
                var tot_quantity = 0;

                if (!_.isEmpty(orderRes) && productDetail) {
                    product.forEach((element) => {
                        productDetail.forEach((element1) => {
                            if (element.product_id == element1.product_id) {
                                tot_quantity = Number(element.quantity);
                                total_amount = Number(element1.price * element.quantity);
                            }
                        })
                        var reqJson = {
                            product_id: element.product_id,
                            total_amount: total_amount,
                            ordered_quantity: tot_quantity,
                            order_id: orderRes.order_id,
                            delivery_datetime: orderRes.delivery_datetime,
                            customer_id: session.customer_id,
                            created_by: session.customer_id,
                            created_dt: new Date().toISOString()
                        }
                        reqAddToCartArray.push(reqJson)
                    })
                }
                commonService.bulkCreate(reqAddToCartArray, models.OrderDetail, function (err: Error, response: any) {
                    waterfallCallback(err, orderRes);
                })
            },
        ], function (err: any, result: any) {
            callback(err, result);
        })
    }

    public updateOrder(req: any, callback: Function) {
        var data = req.body;
        var session = req.session;

        var product = data.productDetail;

        async.waterfall([
            function (waterfallCallback: Function) {
                var condition = {
                    where: {
                        order_id: data.order_id,
                        customer_id: session.customer_id
                    }
                }
                commonService.destroy(condition, models.OrderDetail, function (err: Error, response) {
                    waterfallCallback(null, null)
                })
            },
            function (dummy, waterfallCallback: Function) {

                var reqProductArray: any = [];
                var productIds: any;

                if (!_.isEmpty(product)) {
                    product?.forEach((element: any) => {
                        productIds = element.product_id;
                        reqProductArray.push(productIds)
                    })
                }
                var condition: any = {
                    where: {
                        product_id: reqProductArray
                    }
                }
                commonService.findAll(condition, models.Product, function (err: Error, response: any) {
                    if (err) return callback(err)
                    waterfallCallback(err, response)
                });
            },
            function (productDetail: any, waterfallCallback: Function) {

                var reqdata: any = {};
                var total_amount = 0;
                var quantity = 0;

                var condition: any = {
                    where: {
                        order_id: data.order_id
                    }
                }

                if (!_.isEmpty(productDetail)) {
                    product.forEach((element1) => {
                        productDetail.forEach((element) => {
                            if (element.product_id == element1.product_id) {
                                total_amount += Number(element.price * element1.quantity)
                                quantity += Number(element1.quantity)
                            }
                        })
                    })
                }
                reqdata.total_amount = total_amount;
                reqdata.quantity = quantity;
                reqdata.customer_id = session.customer_id;
                reqdata.updated_by = session.customer_id;
                reqdata.updated_dt = new Date().toISOString();

                commonService.update(reqdata, condition, models.Order, function (err: Error, orderRes: any) {
                    waterfallCallback(err, orderRes, productDetail);
                })
            },
            function (orderRes: any, productDetail: any, waterfallCallback: Function) {

                var reqAddToCartArray = [];
                var total_amount = 0;
                var tot_quantity = 0;

                if (!_.isEmpty(orderRes) && productDetail) {
                    product.forEach((element) => {
                        productDetail.forEach((element1) => {
                            if (element.product_id == element1.product_id) {
                                tot_quantity = Number(element.quantity);
                                total_amount = Number(element1.price * element.quantity);
                            }
                        })
                        var reqJson = {
                            product_id: element.product_id,
                            total_amount: total_amount,
                            ordered_quantity: tot_quantity,
                            order_id: data.order_id,
                            customer_id: session.customer_id,
                            updated_by: session.customer_id,
                            updated_dt: new Date().toISOString()
                        }
                        reqAddToCartArray.push(reqJson)
                    })
                }
                commonService.multiUpdateOrCreate(reqAddToCartArray, ['order_id', 'product_id', 'customer_id'], models.OrderDetail, function (err: Error, response: any) {
                    waterfallCallback(err, "order updated");
                })
            },
        ], function (err: any, result: any) {
            callback(err, result);
        })
    }

    public cancelOrder(req: any, callback: Function) {
        var data = req.body;
        var session = req.session;

        async.waterfall([
            function (waterfallCallback: Function) {
                commonService.findOne({ where: { order_id: data.order_id } }, models.Order, function (err: Error, response: any) {
                    if (err) return callback(err, null)
                    if (response.status == "InActive") return callback(null, "This order already cancelled");
                    waterfallCallback(null, null)
                })
            },
            function (dummy, waterfallCallback: Function) {
                var condition: any = {
                    where: {
                        order_id: data.order_id
                    }
                }
                commonService.update(data, condition, models.Order, function (err: Error, response) {
                    waterfallCallback(err, response);
                })
            },
            function (dummy, waterfallCallback: Function) {
                var condition: any = {
                    where: {
                        order_id: data.order_id,
                        customer_id: session.customer_id
                    }
                }
                commonService.update(data, condition, models.OrderDetail, function (err: Error, response) {
                    waterfallCallback(err, response);
                })
            }
        ], function (err, result) {
            callback(err, "Your order is cancelled")
        })
    }
}

export const orderService = new OrderService()
export default orderService